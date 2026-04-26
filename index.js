const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Conexão com o MongoDB no Docker
mongoose.connect("mongodb://localhost:27017/supermercado_toshiro")
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch(err => console.error("Erro ao conectar no Mongo:", err));


// =========================
// MODELOS (Schemas)
// =========================

const Cliente = mongoose.model("Cliente", new mongoose.Schema({
  nome: String,
  data_nascimento: String,
  contato: String
}));

const Empregado = mongoose.model("Empregado", new mongoose.Schema({
  nome: String,
  salario: Number,
  cargo: String,
  dependentes: [
    {
      nome: String,
      data_nascimento: String
    }
  ]
}));

const Estoque = mongoose.model("Estoque", new mongoose.Schema({
  produto: String,
  quantidade: Number,
  setor: String,
  validade: String
}));


// =========================
// ROTAS
// =========================

app.get("/", (req, res) => {
  res.send("API do Supermercado rodando!");
});


// =========================
// CLIENTES
// =========================

// Listar clientes
app.get("/clientes", async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

// Cadastrar cliente
app.post("/clientes", async (req, res) => {
  try {
    const { nome, data_nascimento, contato } = req.body;

    const novoCliente = await Cliente.create({
      nome,
      data_nascimento,
      contato
    });

    res.status(201).json(novoCliente);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao cadastrar cliente", detalhe: err.message });
  }
});

// Editar cliente
app.put("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, data_nascimento, contato } = req.body;

    const clienteAtualizado = await Cliente.findByIdAndUpdate(
      id,
      { nome, data_nascimento, contato },
      { new: true }
    );

    if (!clienteAtualizado) {
      return res.status(404).json({ erro: "Cliente não encontrado" });
    }

    res.json(clienteAtualizado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar cliente", detalhe: err.message });
  }
});

// Excluir cliente
app.delete("/clientes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const clienteRemovido = await Cliente.findByIdAndDelete(id);

    if (!clienteRemovido) {
      return res.status(404).json({ erro: "Cliente não encontrado" });
    }

    res.json({ mensagem: "Cliente removido com sucesso" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao remover cliente", detalhe: err.message });
  }
});


// =========================
// EMPREGADOS
// =========================

// Listar empregados
app.get("/empregados", async (req, res) => {
  const empregados = await Empregado.find();
  res.json(empregados);
});

// Cadastrar empregado
app.post("/empregados", async (req, res) => {
  try {
    const { nome, salario, cargo, dependentes } = req.body;

    const novoEmpregado = await Empregado.create({
      nome,
      salario,
      cargo,
      dependentes
    });

    res.status(201).json(novoEmpregado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao cadastrar empregado", detalhe: err.message });
  }
});

// Editar empregado
app.put("/empregados/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, salario, cargo, dependentes } = req.body;

    const empregadoAtualizado = await Empregado.findByIdAndUpdate(
      id,
      { nome, salario, cargo, dependentes },
      { new: true }
    );

    if (!empregadoAtualizado) {
      return res.status(404).json({ erro: "Empregado não encontrado" });
    }

    res.json(empregadoAtualizado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar empregado", detalhe: err.message });
  }
});

// Excluir empregado
app.delete("/empregados/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const empregadoRemovido = await Empregado.findByIdAndDelete(id);

    if (!empregadoRemovido) {
      return res.status(404).json({ erro: "Empregado não encontrado" });
    }

    res.json({ mensagem: "Empregado removido com sucesso" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao remover empregado", detalhe: err.message });
  }
});


// =========================
// ESTOQUE
// =========================

// Listar estoque
app.get("/estoque", async (req, res) => {
  const estoque = await Estoque.find();
  res.json(estoque);
});

// Cadastrar item
app.post("/estoque", async (req, res) => {
  try {
    const { produto, quantidade, setor, validade } = req.body;

    const novoItem = await Estoque.create({
      produto,
      quantidade,
      setor,
      validade
    });

    res.status(201).json(novoItem);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao cadastrar item de estoque", detalhe: err.message });
  }
});

// Editar item
app.put("/estoque/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { produto, quantidade, setor, validade } = req.body;

    const itemAtualizado = await Estoque.findByIdAndUpdate(
      id,
      { produto, quantidade, setor, validade },
      { new: true }
    );

    if (!itemAtualizado) {
      return res.status(404).json({ erro: "Item de estoque não encontrado" });
    }

    res.json(itemAtualizado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar item de estoque", detalhe: err.message });
  }
});

// Excluir item
app.delete("/estoque/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const itemRemovido = await Estoque.findByIdAndDelete(id);

    if (!itemRemovido) {
      return res.status(404).json({ erro: "Item de estoque não encontrado" });
    }

    res.json({ mensagem: "Item de estoque removido com sucesso" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao remover item de estoque", detalhe: err.message });
  }
});


// =========================
// SERVIDOR
// =========================

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

