# Challenge-Digitalk
Desafio atribuído como método avaliativo de processo seletivo da empresa [Digitalk](https://digitalk.com.br/). Desafio estruturado para Desenvolvedor Backend Jr.

## Desafio
### Premissas:

- Criar uma API para controle financeiro, utilizando NodeJS, Express.
- O banco de dados pode ser PostgreSQL (Preferência) ou MySQL.
- Se possível utilizar docker e docker-compose.
- Não é necessário desenvolver front-end (a não ser que você deseje), apenas o back-end.

### Teste:
Desenvolver um serviço que seja capaz de armazenar fluxo de caixa e gerar relatórios.

Sua tarefa é desenvolver os serviços REST abaixo:
* Login, Logout (Utilizar JWT)
* Desenvolver uma sessão, onde não permite o usuário se autenticar com dois token ao mesmo tempo.
* Nivel de Usuario.
* Administrador, tem acesso full ao sistema.
* Operador, tem acesso leitura ao sistema.
* CRUD Usuário.
* CRUD contas a pagar.
* CRUD contas a receber.
* Relatório que apresenta o quanto entrou e saiu do caixa.
* Ter a opção de range de data para esse relatório.



# Documentação da API

## Login
Para efetuar login na API, basta fazer um request com o método POST na rota "/auth" contendo no body as informações de e-mail e senha. Confira o exemplo do body a seguir:

###### Requisição necessária: 

```
Rota: /auth,
Método: POST,
Body: {
    "email": "teste@teste",
    "password": "teste"
}
```

###### Resposta esperada: 

```
Body: {
    user: Informações do usuário logado,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImFkbWluIjp0cnVlLCJpYXQiOjE1NjI2MDYwNTEsImV4cCI6MTU2MjYxMzI1MX0.PS2YMK99XRuMSzKHlr15rJqaowq6Rh3udC9B8GqdVLM"
}
```

## Nivel de Usuario
Os usuários são setados como padrão no banco com o campo "admin" = false. Para realizar qualquer alteração no banco e para realizar qualquer operação com os dados dos usuários, é necessário estar autenticado com um token de "admin" = true. O nível de operador ("admin" = false) só é capaz de visualizar as Contas a Pagar, Contas a Receber e Relatório completo.

## Querys - Usuários
As querys na database são realizadas ao realizar requisições em determinadas rotas com determinados métodos. Confira o exemplo a seguir:

###### Requisição necessária:
| Métodos    |Rotas|Admin|
|:----------:|:-----:|:----:|
|GET         |/users|✔️|
|GET         |/users/:id|✔️|
|POST|        /users|✔️|
|UPDATE|/users/:id|✔️|
|DELETE      |/users/:id|✔️|


##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
