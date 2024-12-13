# API Manager - Autenticação e Gerenciamento de APIs

![Node.js](https://img.shields.io/badge/Node.js-v16.0+-green) 
![Express.js](https://img.shields.io/badge/Express-v4.0+-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v5.0+-green)

## Descrição do Projeto

**API Manager** é um sistema backend construído em **Node.js** que fornece uma estrutura robusta para **autenticação de usuários** utilizando **JWT (JSON Web Tokens)**. Ele é projetado para facilitar o gerenciamento e a autenticação em APIs, oferecendo uma base segura para integração com outros sistemas.

O objetivo principal deste projeto é servir como base para o desenvolvimento de APIs modernas e escaláveis, utilizando boas práticas e uma arquitetura clara e modular.

---

## Funcionalidades

- 🔒 **Autenticação de Usuários**: Registre e autentique usuários com segurança usando **JWT**.
- 🛡️ **Proteção de Rotas**: Middleware para proteger endpoints sensíveis.
- 🗃️ **Banco de Dados MongoDB**: Persistência de dados eficiente para usuários e sessões.
- ✨ **Modularidade**: Estrutura organizada para facilitar o crescimento do projeto.
- 🛠️ **Pronto para Escalar**: Facilmente extensível para novos recursos e integrações.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16.0 ou superior)
- [MongoDB](https://www.mongodb.com/) (instância local ou na nuvem)
- [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar as APIs.

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/api_manager.git
   cd api_manager

2. **Instale as dependências:**
    ```bash
    npm install

3. **Configure o arquivo .env: Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente:**
    ```bash
    MONGO_URI=mongodb://localhost:27017/api_manager
    JWT_SECRET=sua_chave_secreta
    PORT=3000

4. **Inicie o servidor:**
    ```bash
    node src/index.js
