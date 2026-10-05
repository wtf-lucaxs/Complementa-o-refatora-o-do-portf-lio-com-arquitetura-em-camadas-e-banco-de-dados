# Portfólio Profissional em Camadas

## Banco de Dados Utilizado
* MySQL (através do driver `mysql2`)

## Instalação e Configuração
1. Instale as dependências do projeto:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` na raiz do projeto com as credenciais do seu banco local:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=portfolio_db
   ```
3. Importe o script contido em `src/database/banco.sql` no seu servidor de banco de dados.

## Execução
Para iniciar o servidor, execute o comando:
```bash
node src/server.js
```
Acesse no navegador: `http://localhost:3000`

## Estrutura do Projeto
* `src/database/` - Conexão e scripts SQL.
* `src/routes/` - Definição das rotas HTTP.
* `src/controllers/` - Controladores da aplicação.
* `src/services/` - Camada de regras de negócio.
* `src/repositories/` - Consultas e persistência de dados (SQL).
* `src/views/` - Páginas de visualização EJS.
