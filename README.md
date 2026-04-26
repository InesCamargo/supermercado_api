# 🏪 Supermercado Toshiro — API



API desenvolvida para gerenciar o sistema interno do **Supermercado Toshiro**, um mercado de bairro simples e acolhedor.  
O projeto foi criado com foco no desafio do Bootcamp Microsoft - Azure Advanced #2, criação de containers e uso do Docker e também colaborou para o aprendizado de **Node.js**, **Express** e **MongoDB**, simulando o funcionamento real de um supermercado.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — ambiente de execução JavaScript  
- **Express.js** — framework para criação de rotas e servidor  
- **MongoDB** — banco de dados não relacional  
- **MySQL** — controle de estoque e dados relacionais  
- **Thunder Client** — testes de rotas dentro do VS Code  
- **Visual Studio Code** — ambiente de desenvolvimento  

---

## 📂 Estrutura do Projeto

Trata-se de uma empresa pequena (**Copilot & Inês.ME**)  
A estrutura do projeto contempla:

1. **Controle de estoque** no depósito e nas gôndolas, utilizando banco relacional (MySQL).  
2. **Controle administrativo**, incluindo empregados, cargos (com permissões) e clientes — servindo de base para decisões sobre produtos e campanhas.  
3. **API principal** para relacionar os containers e executar o CRUD completo (Create, Read, Update, Delete).

---

## 🔗 Rotas Principais

| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/clientes` | Lista todos os clientes |
| POST | `/clientes` | Cadastra um novo cliente |
| PUT | `/clientes/:id` | Atualiza dados de um cliente |
| DELETE | `/clientes/:id` | Remove um cliente do sistema |

---

## 🧠 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/InesCamargo/supermercado_api.git
