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


#### Login
Para efetuar login na API, basta fazer um request com o método POST na rota "/auth" contendo no body as informações de e-mail e senha. Confira o exemplo do body a seguir:

###### Requisição necessária: 

```
Rota: api/auth,
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
    token: "aisuhdais98172d1872361uh12gd1872g11927dg1872"
}
```

##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
##### Login, Logout (Utilizar JWT)
