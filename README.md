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
Header: ,
Body: {
    "email": "teste@teste",
    "password": "teste"
}
```

###### Resposta esperada: 

```
Status Code: 200
Body: {
    user: Informações do usuário logado,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImFkbWluIjp0cnVlLCJpYXQiOjE1NjI2MDYwNTEsImV4cCI6MTU2MjYxMzI1MX0.PS2YMK99XRuMSzKHlr15rJqaowq6Rh3udC9B8GqdVLM"
}
```

## Nivel de Usuario
Os usuários são setados como padrão no banco com o campo "admin" = false. Para realizar qualquer alteração no banco e para realizar qualquer operação com os dados dos usuários, é necessário estar autenticado com um token de "admin" = true. O nível de operador ("admin" = false) só é capaz de visualizar as Contas a Pagar, Contas a Receber e Relatório completo.

## Querys - Usuários
As querys na database são realizadas ao realizar requisições em determinadas rotas com determinados métodos. Confira o exemplo a seguir:

#### Requisição necessária:
| Métodos    |Rotas|Admin|Ação|Resposta Esperada|Status Code|
|:----------:|:-----:|:----:|:---:|:-----:|:----:|
|GET         |/users|✔️|Lista todos os usuários|Vetor de Usuários|200|
|GET         |/users/:id|✔️|Lista as informações de um usuário específico| Objeto de Usuário|200|
|POST|        /users|✔️|Cadastra um usuário cuja as informações foram passadas no Body da requisição| Usuário Criado| 201|
|UPDATE|/users/:id|✔️|Edita as informações de um usuário específico| Informações atualizadas |202|
|DELETE      |/users/:id|✔️|Apaga um usuário específico| Usuário deletado |202|

___
#### Informações necessárias para a Listar o(s) usuário(s):
```
Rota: /users (/:id)
Método: GET,
Header: x-access-token: token,
Body: 
```

___
#### Informações necessárias para a Criação do usuário:
```
Rota: /users
Método: POST,
Header: x-access-token: token,
Body: {
    "name": "teste",
    "username": "teste",
    "email": "teste@teste",
    "password": "teste",
    "admin": true
}
```

___
#### Informações necessárias para Alterar o usuário:
```
Rota: /users/:id
Método: PUT,
Header: x-access-token: token,
Body: { Confira os exemplos abaixo }
```
###### Exemplos de Body para a alteração:
```
Body: {
    "name": "Marcelo",
    "email": "xpto@teste.com.br" //Único
    "username": "bla"
}
```

```
Body: {
    "admin": true
}
```
___

##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
