# Alpha Feedback System

O **Alpha Feedback System** é um sistema web que permite que os usuários enviem e visualizem feedbacks. Ele consiste em um **frontend em React** e um **backend em Node.js com Express**, utilizando **MongoDB** como banco de dados.

## 👐 Funcionalidades
✅ Formulário para envio de feedbacks com validação.  
✅ Listagem de feedbacks enviados.  
✅ API REST para manipulação dos feedbacks.  
✅ Banco de dados MongoDB para armazenamento seguro.  
✅ Documentação da API disponível via Swagger.  

---

## 🚀 Tecnologias Utilizadas

### **Frontend**
- React.js
- React Router
- React Hook Form + Zod (validação)
- Axios (requisições HTTP)
- Bootstrap + CSS personalizado

### **Backend**
- Node.js + Express.js
- Mongoose (ORM para MongoDB)
- Dotenv (variáveis de ambiente)
- CORS (Cross-Origin Resource Sharing)
- Swagger (documentação da API)

### **Banco de Dados**
- MongoDB Atlas (versão em nuvem do MongoDB)

---

## 🔧 Como Configurar e Rodar o Projeto

### **1️⃣ Clone o Repositório**
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

### **2️⃣ Configuração do Backend**
1. Acesse a pasta do backend:
   ```sh
   cd feedback-api
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo **`.env`** e configure a string de conexão do MongoDB:
   ```
   MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/feedbacksDB
   PORT=5000
   ```

4. Inicie o servidor:
   ```sh
   npm start
   ```

📌 **A API estará rodando em:** `http://localhost:5000`

---

### **3️⃣ Configuração do Frontend**
1. Acesse a pasta do frontend:
   ```sh
   cd ../feedback-app
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o frontend:
   ```sh
   npm run dev
   ```

📌 **O site estará acessível em:** `http://localhost:5173`

---

## 📖 Documentação da API (Swagger)
A documentação interativa da API pode ser acessada via Swagger:

📌 **URL da Documentação:**
```
http://localhost:5000/api-docs
```

### **Como testar a API pelo Swagger?**
1. Inicie o backend (`npm start`).
2. Abra o navegador e vá até `http://localhost:5000/api-docs`.
3. Explore as rotas, faça requisições e veja as respostas da API.

---

## 🔄 Rotas da API

### **📌 Criar um feedback**
- **Rota:** `POST /api/feedbacks`
- **Body (JSON):**
  ```json
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "rating": 5,
    "message": "Ótimo serviço!"
  }
  ```
- **Resposta esperada:**
  ```json
  {
    "message": "Feedback salvo com sucesso!"
  }
  ```

### **📌 Listar feedbacks**
- **Rota:** `GET /api/feedbacks`
- **Resposta esperada:**
  ```json
  [
    {
      "_id": "65abcdef1234567890123456",
      "name": "João Silva",
      "email": "joao@email.com",
      "rating": 5,
      "message": "Ótimo serviço!"
    }
  ]
  ```

---

## 🔦 Estrutura do Projeto
```
📆 Alpha Feedback System
├── 💚 feedback-api (Backend)
│   ├── 📂 models
│   │   ├── Feedback.js
│   ├── 📂 routes
│   │   ├── feedbackRoutes.js
│   ├── server.js
│   ├── .env.example
│   ├── package.json
│   ├── .gitignore
│
├── 💚 feedback-app (Frontend)
│   ├── 📂 src
│   │   ├── 📂 components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   ├── 📂 pages
│   │   │   ├── LandingPage.jsx
│   │   │   ├── FeedbackForm.jsx
│   │   │   ├── FeedbackList.jsx
│   │   ├── 📂 styles
│   │   │   ├── LandingPage.css
│   │   │   ├── FeedbackForm.css
│   │   │   ├── FeedbackList.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   ├── App.jsx
│   ├── package.json
│   ├── .gitignore
│
└── README.md
```

---

## 💎 Boas Práticas Aplicadas
✅ **Código modular** com componentes reutilizáveis.  
✅ **Validação dos dados antes de salvar no banco** (React Hook Form + Zod e Mongoose).  
✅ **Uso correto do `.gitignore`** para evitar o commit de `node_modules/` e `.env`.  
✅ **Mensagens de commit padronizadas** seguindo **Commit Patterns**.  
✅ **API documentada com Swagger e DocBlocks**.  

---

## 🙏 Contribuição
Se quiser contribuir, siga os passos:
1. **Fork este repositório**.
2. **Crie uma branch com a sua funcionalidade** (`git checkout -b feature-minha-funcionalidade`).
3. **Commit suas mudanças** (`git commit -m "feat: adiciona nova funcionalidade"`).
4. **Envie para o repositório remoto** (`git push origin feature-minha-funcionalidade`).
5. **Crie um Pull Request**.

---

## 📚 Licença
Este projeto é open-source.

---

