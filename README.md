## Começando

Para rodar o back-end local devemos dar os seguintes comandos

`npx prisma db push`
`yarn seed`
`yarn dev`

Caso queira rodas ele no docker use:

`docker-compose up -d --build`

Lembre-se de atualizar o env caso suba o back-end no docker.

Assim tudo sera iniciado e a aplicação estava pronta para uso.

## Rotas
| Método | Descrição |
|---|---|
| `GET /findUsers` | Retorna as informações de todos os usuários. |
| `DELETE /deleteUser:/id` | Deleta um usuario pelo ID. |
| `POST /createUser` | Cria um usuario. |
| `PUT /updateUser:/id` | Edita um usuario pelo ID. |