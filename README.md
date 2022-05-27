# Documentação da API

## Tabela de Conteúdos

- [Documentação da API](#documentação-da-api)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [1. Visão Geral](#1-visão-geral)
  - [2. Diagrama ER](#2-diagrama-er)
  - [3. Início Rápido](#3-início-rápido)
    - [3.1. Instalando Dependências](#31-instalando-dependências)
    - [3.2. Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [3.3. Migrations](#33-migrations)
  - [4. Autenticação](#4-autenticação)
  - [5. Endpoints](#5-endpoints)
    - [Índice](#índice)
  - [1. **Users**](#1-users)
    - [Endpoints](#endpoints)
    - [1.1. **Criação de Usuário**](#11-criação-de-usuário)
    - [`/users`](#users)
    - [Exemplo de Request:](#exemplo-de-request)
    - [Corpo da Requisição:](#corpo-da-requisição)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup)
    - [Exemplo de Response:](#exemplo-de-response)
    - [Possíveis Erros:](#possíveis-erros)
    - [1.2. **Login do usuário**](#12-login-do-usuário)
    - [`/users/login`](#userslogin)
    - [Exemplo de Request:](#exemplo-de-request-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possíveis Erros:](#possíveis-erros-1)
    - [1.3. **Listando Usuários**](#13-listando-usuários)
    - [`/users`](#users-1)
    - [Exemplo de Request:](#exemplo-de-request-2)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possíveis Erros:](#possíveis-erros-2)
    - [1.4. **Listar Usuário por Id**](#14-listar-usuário-por-id)
    - [`/users/:id`](#usersid)
    - [Exemplo de Request:](#exemplo-de-request-3)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possíveis Erros:](#possíveis-erros-3)
    - [1.5. **Atualizar Usuário por ID**](#15-atualizar-usuário-por-id)
    - [`/users/:id`](#usersid-1)
    - [Exemplo de Request:](#exemplo-de-request-4)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-1)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possíveis Erros:](#possíveis-erros-4)
    - [2. **Produtos**](#2-produtos)
    - [Endpoints](#endpoints-1)
    - [2.1. **Criação de Produto**](#21-criação-de-produto)
    - [`/products`](#products)
    - [Exemplo de Request:](#exemplo-de-request-5)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-1)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possíveis Erros:](#possíveis-erros-5)
    - [2.2. **Listar Produtos**](#22-listar-produtos)
    - [`/products`](#products-1)
    - [Exemplo de Request:](#exemplo-de-request-6)
    - [Corpo da Requisição:](#corpo-da-requisição-6)
    - [Exemplo de Response:](#exemplo-de-response-6)
    - [Possíveis Erros:](#possíveis-erros-6)
    - [2.3. **Listar Produto por ID**](#23-listar-produto-por-id)
    - [`/products/:id`](#productsid)
    - [Exemplo de Request:](#exemplo-de-request-7)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-2)
    - [Corpo da Requisição:](#corpo-da-requisição-7)
    - [Exemplo de Response:](#exemplo-de-response-7)
    - [Possíveis Erros:](#possíveis-erros-7)
    - [2.4. **Atualizar Produto por ID**](#24-atualizar-produto-por-id)
    - [`/products/:id`](#productsid-1)
    - [Exemplo de Request:](#exemplo-de-request-8)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-3)
    - [Corpo da Requisição:](#corpo-da-requisição-8)
    - [Exemplo de Response:](#exemplo-de-response-8)
    - [Possíveis Erros:](#possíveis-erros-8)
    - [3. **Carrinho**](#3-carrinho)
    - [Endpoints](#endpoints-2)
    - [3.1. **Adicionar produto no carrinho**](#31-adicionar-produto-no-carrinho)
    - [`/cart`](#cart)
    - [Exemplo de Request:](#exemplo-de-request-9)
    - [Corpo da Requisição:](#corpo-da-requisição-9)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-2)
    - [Exemplo de Response:](#exemplo-de-response-9)
    - [Possíveis Erros:](#possíveis-erros-9)
    - [3.2. **Listar produtos de todos os carrinhos**](#32-listar-produtos-de-todos-os-carrinhos)
    - [`/cart`](#cart-1)
    - [Exemplo de Request:](#exemplo-de-request-10)
    - [Corpo da Requisição:](#corpo-da-requisição-10)
    - [Exemplo de Response:](#exemplo-de-response-10)
    - [Possíveis Erros:](#possíveis-erros-10)
    - [3.3. **Listar Produtos do carrinho de um único usuário**](#33-listar-produtos-do-carrinho-de-um-único-usuário)
    - [`/products/:id`](#productsid-2)
    - [Exemplo de Request:](#exemplo-de-request-11)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-4)
    - [Corpo da Requisição:](#corpo-da-requisição-11)
    - [Exemplo de Response:](#exemplo-de-response-11)
    - [Possíveis Erros:](#possíveis-erros-11)
    - [3.4. **Listar o carrinho de um único usuário logado**](#34-listar-o-carrinho-de-um-único-usuário-logado)
    - [`/cart/:profile`](#cartprofile)
    - [Exemplo de Request:](#exemplo-de-request-12)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-5)
    - [Corpo da Requisição:](#corpo-da-requisição-12)
    - [Exemplo de Response:](#exemplo-de-response-12)
    - [Possíveis Erros:](#possíveis-erros-12)
    - [3.5. **Subtrai a quantidade de um produto no cart**](#35-subtrai-a-quantidade-de-um-produto-no-cart)
    - [`/cart/removerProd:cartProdId`](#cartremoverprodcartprodid)
    - [Exemplo de Request:](#exemplo-de-request-13)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-6)
    - [Corpo da Requisição:](#corpo-da-requisição-13)
    - [Exemplo de Response:](#exemplo-de-response-13)
    - [Possíveis Erros:](#possíveis-erros-13)
    - [4. **Pedidos**](#4-pedidos)
    - [Endpoints](#endpoints-3)
    - [4.1. **Criar pedidos**](#41-criar-pedidos)
    - [`/order`](#order)
    - [Exemplo de Request:](#exemplo-de-request-14)
    - [Corpo da Requisição:](#corpo-da-requisição-14)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-3)
    - [Exemplo de Response:](#exemplo-de-response-14)
    - [Possíveis Erros:](#possíveis-erros-14)
    - [4.2. **Listar Pedidos**](#42-listar-pedidos)
    - [`/order`](#order-1)
    - [Exemplo de Request:](#exemplo-de-request-15)
    - [Corpo da Requisição:](#corpo-da-requisição-15)
    - [Exemplo de Response:](#exemplo-de-response-15)
    - [Possíveis Erros:](#possíveis-erros-15)
    - [4.3. **Listar os pedidos do próprio usuário**](#43-listar-os-pedidos-do-próprio-usuário)
    - [`/order/profile`](#orderprofile)
    - [Exemplo de Request:](#exemplo-de-request-16)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-7)
    - [Corpo da Requisição:](#corpo-da-requisição-16)
    - [Exemplo de Response:](#exemplo-de-response-16)
    - [Possíveis Erros:](#possíveis-erros-16)
    - [4.4. **Listar Pedido de Usuário específico**](#44-listar-pedido-de-usuário-específico)
    - [`/order/listuserorder/:user_Id`](#orderlistuserorderuser_id)
    - [Exemplo de Request:](#exemplo-de-request-17)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-8)
    - [Corpo da Requisição:](#corpo-da-requisição-17)
    - [Exemplo de Response:](#exemplo-de-response-17)
    - [Possíveis Erros:](#possíveis-erros-17)
    - [4.5. **Listar um Pedido Específico**](#45-listar-um-pedido-específico)
    - [`/order/:id`](#orderid)
    - [Exemplo de Request:](#exemplo-de-request-18)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-9)
    - [Corpo da Requisição:](#corpo-da-requisição-18)
    - [Exemplo de Response:](#exemplo-de-response-18)
    - [Possíveis Erros:](#possíveis-erros-18)
    - [4.6. **Atualizar Produto por ID**](#46-atualizar-produto-por-id)
    - [`/order/:id`](#orderid-1)
    - [Exemplo de Request:](#exemplo-de-request-19)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-10)
    - [Corpo da Requisição:](#corpo-da-requisição-19)
    - [Exemplo de Response:](#exemplo-de-response-19)
    - [Possíveis Erros:](#possíveis-erros-19)
    - [5. **Endereços**](#5-endereços)
    - [Endpoints](#endpoints-4)
  - [| Deletar produto do banco          	| DELETE 	| /address/:id      	| 204    	|](#-deletar-produto-do-banco-----------delete--addressid-------204----)
    - [5.1. **Criação de Endereço**](#51-criação-de-endereço)
    - [`/address`](#address)
    - [Exemplo de Request:](#exemplo-de-request-20)
    - [Corpo da Requisição:](#corpo-da-requisição-20)
    - [Exemplo de Response:](#exemplo-de-response-20)
    - [Possíveis Erros:](#possíveis-erros-20)
    - [5.2. **Listando Endereços**](#52-listando-endereços)
    - [`/address`](#address-1)
    - [Exemplo de Request:](#exemplo-de-request-21)
    - [Corpo da Requisição:](#corpo-da-requisição-21)
    - [Exemplo de Response:](#exemplo-de-response-21)
    - [Possíveis Erros:](#possíveis-erros-21)
    - [5.3. **Listar Apenas um Endereço**](#53-listar-apenas-um-endereço)
    - [` /address/:user_id`](#-addressuser_id)
    - [Exemplo de Request:](#exemplo-de-request-22)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-11)
    - [Corpo da Requisição:](#corpo-da-requisição-22)
    - [Exemplo de Response:](#exemplo-de-response-22)
    - [Possíveis Erros:](#possíveis-erros-22)
    - [5.4. **Atualizar os dados de Endereço por ID**](#54-atualizar-os-dados-de-endereço-por-id)
    - [`/address/:id`](#addressid)
    - [Exemplo de Request:](#exemplo-de-request-23)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-12)
    - [Corpo da Requisição:](#corpo-da-requisição-23)
    - [Exemplo de Response:](#exemplo-de-response-23)
    - [Possíveis Erros:](#possíveis-erros-23)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.
- [Dependências padrões:]
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)
- Dependências padrões:
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)
- [Dontenv]
- [Ts-node]
- [Pg]
- [Jsonwebtoken]
- [Uuid]
- [Typeorm]
- [Reflect-metadata]
- [Class-transformer]
- [Express-async-errors]
- [Express-yup-middleware]
- [Dependências Dev:]
- [Sqlite3]
- [Supertest]
- [Jest 27.5.1]
- [Ts-jest]
- [Ts-node-dev]
- [Typescript]

A URL base da aplicação:
https://api-music-club-shop.herokuapp.com/

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](musiclubshop.drawio.png)

---


## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---
## 4. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Autenticação de token e adiministrador nas rotas:
- [Users:]
- 
    - [POST - /users](Autenticado com: Schema - expressYupMiddleware)
    - [POST - /users/login](Autenticado com: Schema - expressYupMiddleware)
    - [GET - /users](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyAdminMiddleware)
    - [GET - /users/profile](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware)
    - [GET - /users/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - [PATCH - /users/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware,verifyIfItsAdmOrOwnerMiddleware, verifyIfYouAreTryingToUpdateOrDeleteAdminUser - Autenticado com: Schema - expressYupMiddleware)
    - [DELETE - /users/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyIfItsAdmOrOwnerMiddleware, verifyIfYouAreTryingToUpdateOrDeleteAdminUser)
    - 
- [Products:]
- 
    - [POST - /products](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyAdminMiddleware - Autenticado com: Schema - expressYupMiddleware)
    - [PATCH - /products/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyAdminMiddleware, - Autenticado com: Schema - expressYupMiddleware)
    - [DELETE - /products/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyAdminMiddleware)
    - 
- [Orders:]
- 
    - [GET - /orders](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyAdminMiddleware)
    - [GET - /orders/profile](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware)
    - [GET - /orders/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyIfItsAdmOrOwnerOrderMiddleware)
    - [POST - /orders](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, - Autenticado com: Schema - expressYupMiddleware)
    - [PATCH - /orders/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyIfItsAdmOrOwnerOrderMiddleware - Autenticado com: Schema - expressYupMiddleware)
    - [DELETE - /orders/:id](Autenticado com: Middleware - verifyTokenAuthenticationMiddleware, verifyIfItsAdmOrOwnerOrderMiddleware)
    - 
- [Address:]
- 
    - [POST - /address](Autenticado com: Middleware - authTokenMiddleware)
    - [GET - /address](Autenticado com: Middleware - authTokenMiddleware, verifyAdminMiddleware)
    - [GET - /address/user_id](Autenticado com: Middleware - authTokenMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - [PATCH - /address/:id](Autenticado com: Middleware - authTokenMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - [DELETE - /address/:id](Autenticado com: Middleware - authTokenMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - 
- [Cart:]
    - [POST - /cart](Autenticado com: Middleware - authTokenMiddleware - Autenticado com: Schema - expressYupMiddleware)
    - [GET - /cart](Autenticado com: Middleware - authTokenMiddleware, verifyAdminMiddleware)
    - [GET - /cart/profile](Autenticado com: Middleware - authTokenMiddleware, verifyAdminMiddleware)
    - [GET - /cart/:id](Autenticado com: Middleware - authTokenMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - [DELETE - /cart:cartProdId](Autenticado com: Middleware - authTokenMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - [DELETE - /cart/removeProd/:cartProdId](Autenticado com: Middleware - authTokenMiddleware, verifyIfItsAdmOrOwnerMiddleware)
    - 

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [POST - /users/login](#12-login-do-usuário)
    - [GET - /users/profile]
    - [GET - /users](#13-listando-usuários)
    - [GET - /users/:id](#14-listar-usuário-por-id)
    - [UPDATE - /users/:id](#15-atualizar-usuário-por-id)
    - [DELETE - /users/:id]
	
- [Products](#2-produtos)
    - [POST - /products](#21-criação-de-produto)
    - [GET - /products](#22-listar-produtos)
    - [GET -  /products/:id](#23-listar-produto-por-id)
    - [PATCH -  /products/:id](#24-atualizar-produto-por-id)
    - [DELETE -  /products/:id]
    - 
- [Cart](#3-carrinho)
    - [POST - /cart](#31-adicionar-produto-no-carrinho)
    - [GET - /cart](#32-listar-produtos-de-todos-os-carrinhos)
    - [GET - /cart/:id](#33-listar-produtos-do-carrinho-de-um-único-usuário)
    - [GET - /cart/:profile](#34-listar-o-carrinho-de-um-único-usuário-logado)
    - [DELETE - /cart/:id](#35-subtrai-a-quantidade-de-um-produto-no-cart) 
    - [DELETE - /cart/removeProd/:cartProdId]
    - 
- [Orders](#4-pedidos)
    - [POST - /orders](#41-criar-pedidos)
    - [GET - /orders](#42-listar-pedidos)
    - [GET - /orders/profile](#43-listar-os-pedidos-do-próprio-usuário)
    - [GET - /order/listuserorder/:user_Id](#44-listar-pedido-de-usuário-específico)
    - [GET - /order/:id](#45-listar-um-pedido-específico)
    - [PATCH - /order/:id](#46-atualizar-produto-por-id)
    - [DELETE - /order/:id]
    - 
- [Address](#5-endereços)
    - [POST - /address](#51-criação-de-endereço)
    - [GET - /address](#52-listando-endereços)
    - [GET - /address/:user_id](#53-listar-apenas-um-endereço)
    - [PATCH - /address/:id](#54-atualizar-os-dados-de-endereço-por-id)
    - [DELETE - /address/:id]


---

## 1. **Users**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      	| Tipo    	| Descrição                                    	|
|------------	|---------	|----------------------------------------------	|
| name       	| string  	| O nome do usuário.                           	|
| email      	| string  	| O e-mail do usuário.                         	|
| password   	| string  	| A senha de acesso do usuário                 	|
| is_adm     	| boolean 	| Define se um usuário é Administrador ou não. 	|
| user_name  	| string  	| Apelido do usuário                           	|
| birth_date 	| string  	| Data de nascimento do usuário                	|
| tel        	| string  	| Telefone do usuário                          	|


### Endpoints

| Responsabilidade                    	| Método 	| Endpoints       	| Status 	|
|-------------------------------------	|--------	|-----------------	|--------	|
| Criar usuários                      	| POST   	| /users          	| 201    	|
| Gerar um token JWT                  	| POST   	| /users/login    	| 200    	|
| Listar todos os usuários            	| GET    	| /users          	| 200    	|
| Listar o próprio usuário            	| GET    	| /users/profile  	| 200    	|
| Listar dados de um único usuário 	| GET    	| /users/:id 	| 200    	|
| Atualizar os dados de um usuário    	| PATCH  	| /users/:id         	| 200    	|
| Deletar usuários do banco           	| DELETE 	| /users/:id         	| 204    	|

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: https://api-music-club-shop.herokuapp.com/users
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	
	"name":"Jefferson",
	"email":"jefferson@mail.com",
	"password":"1234",
	"user_name":"jefferson",
	"birth_date":"18/06/1997",
	"tel":"23123124"

}
```

### Schema de Validação com Yup:
```javascript
name: yup.string().required(),
	
email: yup.string().email().required(),

user_name: yup.string().required(),

birth_date: yup.string().required(),

password: yup.string().required(),

is_adm: yup.boolean(),

tel: yup.string().required()

```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"name": "Jefferson",
	"email": "jefferson@mail.com",
	"tel": "23123124",
	"user_name": "jefferson",
	"birth_date": "18/06/1997",
	"is_adm": false,
	"cart": {
		"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
		"products": [],
		"subtotal": 0,
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3"
	},
	"create_at": "2022-05-25T12:28:06.102Z",
	"updated_at": "2022-05-25T12:28:06.102Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Email already registered. |

---

### 1.2. **Login do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/login`

### Exemplo de Request:
```
GET /users
Host: https://api-music-club-shop.herokuapp.com/users/login
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email":"jefferson@mail.com",
	"password":"1234"
}
```
### Exemplo de Response:
```
200 OK
```
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmZlcnNvbkBtYWlsLmNvbSIsImlzX2FkbSI6dHJ1ZSwidXNlcl9uYW1lIjoiamVmZmVyc29uIiwiaWF0IjoxNjUzMDY1NTMyLCJleHAiOjE2NTMxNTE5MzIsInN1YiI6ImNjNWRjMmJkLTEwNzktNGQwYy05YTA2LTA2NTU5MmU2OTJkMyJ9.JSi6AQGPSSO9H3fGZBiMWRczblIHvpAKm4ugsM0_4XM"
}
```
### Possíveis Erros:
Nenhum.

---

### 1.3. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
GET /users
Host: https://api-music-club-shop.herokuapp.com/users
Authorization: Adm
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
		"name": "Thiago Henrique Monserrat",
		"email": "thiagomonserrat@gmail.com",
		"user_name": "thiagomonserrat",
		"birth_date": "11/07/1998",
		"tel": "+55(31)998403490",
		"is_adm": false,
		"create_at": "2022-05-24T15:10:45.965Z",
		"updated_at": "2022-05-24T15:10:45.965Z",
		"cart": {
			"id": "4e28c5ca-4533-4000-a5cd-fed02a7ab58b",
			"subtotal": 0,
			"userId": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
			"products": []
		}
	}
]
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.4. **Listar Usuário por Id**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
GET /users/db44f1f4-a4b1-4451-be11-7920e1bcac88
Host: https://api-music-club-shop.herokuapp.com/users/:id
Authorization: Adm
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
		"name": "Thiago Henrique Monserrat",
		"email": "thiagomonserrat@gmail.com",
		"user_name": "thiagomonserrat",
		"birth_date": "11/07/1998",
		"tel": "+55(31)998403490",
		"is_adm": true,
		"create_at": "2022-05-24T15:10:45.965Z",
		"updated_at": "2022-05-24T15:10:45.965Z",
		"cart": {
			"id": "4e28c5ca-4533-4000-a5cd-fed02a7ab58b",
			"subtotal": 0,
			"userId": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
			"products": []
		}
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |

---

### 1.5. **Atualizar Usuário por ID**



[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
GET /users/db44f1f4-a4b1-4451-be11-7920e1bcac88
Host: https://api-music-club-shop.herokuapp.com/users/:id
Authorization: Adm e próprio usuário
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
	"name":"Novo Thiago",
	"email":"thiagomonserrat@gmail.com",
	"password":"1234",
	"user_name":"thiagomonserrat",
	"birth_date":"11/07/1998",
  "tel": "+55(31)998403490"
}
```

### Exemplo de Response:
```
200 OK
```

```json
{
	"id": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
	"name": "Novo Thiago",
	"email": "thiagomonserrat@gmail.com",
	"user_name": "thiagomonserrat",
	"birth_date": "11/07/1998",
  "tel": "+55(31)998403490",
	"is_adm": false,
	"password": "$2a$08$H5pBH161MoZunl9HcEf4k.Frz2V2wDY5inO5qUa7BMwTgEeTEufGa",
	"create_at": "2022-05-20T16:52:09.396Z",
	"updated_at": "2022-05-20T16:54:22.893Z",
	"cart": {
		"id": "4e28c5ca-4533-4000-a5cd-fed02a7ab58b",
		"total": 0,
		"userId": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
		"products": []
	}
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |

---

### 2. **Produtos**

[ Voltar aos Endpoints ](#5-endpoints)

O objeto Product é definido como:

| Campo          	| Tipo   	| Descrição                 	|
|----------------	|--------	|---------------------------	|
| name           	| string 	| O nome do produto         	|
| price          	| number 	| O preço do produto        	|
| img_url        	| string 	| Link da imagem do produto 	|
| type           	| string 	| Tipo do produto           	|
| quantity_stock 	| number 	| Quantidade do produto     	|
| rating         	| string 	| Avaliação do produto      	|
| label          	| string 	| Marca do produto          	|
| description    	| string 	| Descrição do produto      	|


### Endpoints

| Responsabilidade                 	| Método 	| Endpoint      	| Status 	|
|----------------------------------	|--------	|---------------	|--------	|
| Criar produtos                   	| POST   	| /products     	| 201    	|
| Listar todos os produtos         	| GET    	| /products     	| 200    	|
| Listar os dados de um produto    	| GET    	| /products/:id 	| 200    	|
| Atualizar os dados de um produto 	| PATCH  	| /products/:id 	| 200    	|
| Deletar produto do banco         	| DELETE 	| /products/:id 	| 204    	|

---
### 2.1. **Criação de Produto**

[ Voltar para os Endpoints ](#5-endpoints)

### `/products`

### Exemplo de Request:
```
GET /products
Host: https://api-music-club-shop.herokuapp.com/products
Authorization: Adm
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "Berimbau Salvat",
	"price": 120,
	"description": "Descubra tudo sobre o berimbau, um instrumento que tem sido difundido através da capoeira e graças às tendências de fusão, mestiçagem e transculturação. Uma coleção de belíssimas reproduções em madeira e metal.",
	"img_url": "https://www.capoeirashop.fr/346-large_default/berimbau-para-crianca.jpg",
	"type": "Instrumento de corda",
	"quantity_stock": 100,
	"rating": 0,
	"label": "salvat"
}
```

### Schema de Validação com Yup:
```javascript
name: yup.string().required()

price: yup.number().required()

img_url: yup.string().required()

type: yup.string().required()

quantity_stock: yup.number().required()

rating: yup.number().required()

label: yup.string().required()

description: yup.string().required()

```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "3170780f-7912-4391-b50b-7b7511b71881",
	"name": "Berimbau Salvat",
	"price": 120,
	"img_url": "https://www.capoeirashop.fr/346-large_default/berimbau-para-crianca.jpg",
	"type": "Instrumento de corda",
	"quantity_stock": 100,
	"rating": 0,
	"label": "salvat",
	"description": "Descubra tudo sobre o berimbau, um instrumento que tem sido difundido através da capoeira e graças às tendências de fusão, mestiçagem e transculturação. Uma coleção de belíssimas reproduções em madeira e metal.",
	"create_at": "2022-05-25T00:01:57.289Z",
	"updated_at": "2022-05-25T00:01:57.289Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Product already registered. |

---

### 2.2. **Listar Produtos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products`

### Exemplo de Request:
```
GET /users
Host: https://api-music-club-shop.herokuapp.com/products
Authorization: Adm
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
		"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
		"price": 828,
		"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
		"type": "Instrumento de corda",
		"quantity_stock": 100,
		"rating": 0,
		"label": "Tagima",
		"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
		"create_at": "2022-05-24T15:45:17.017Z",
		"updated_at": "2022-05-24T15:45:17.017Z"
	}
]
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.3. **Listar Produto por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/products/:id`

### Exemplo de Request:
```
GET /users/db44f1f4-a4b1-4451-be11-7920e1bcac88
Host: https://api-music-club-shop.herokuapp.com/products/:id
Authorization: Adm
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do produto (Product) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
		"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
		"price": 828,
		"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
		"type": "Instrumento de corda",
		"quantity_stock": 100,
		"rating": 0,
		"label": "Tagima",
		"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
		"create_at": "2022-05-24T15:45:17.017Z",
		"updated_at": "2022-05-24T15:45:17.017Z"
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Product not found. |

---

### 2.4. **Atualizar Produto por ID**



[ Voltar aos Endpoints ](#5-endpoints)

### `/products/:id`

### Exemplo de Request:
```
GET /users/db44f1f4-a4b1-4451-be11-7920e1bcac88
Host: https://api-music-club-shop.herokuapp.com/products/:id
Authorization: Adm 
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do produto (Product) |

### Corpo da Requisição:
```json
{
	"name":"Berimbau",
	"price":828,
	"img_url":"https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
	"type":"Instrumento de corda",
	"quantity_stock":100,
	"rating":0,
	"label":"Tagima",
  "description":"blablabla "
}
```

### Exemplo de Response:
```
200 OK
```

```json
[
	{
		"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
		"name": "Berimbau",
		"price": 828,
		"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
		"type": "Instrumento de corda",
		"quantity_stock": 100,
		"rating": 0,
		"label": "Tagima",
		"description": "blablabla",
		"create_at": "2022-05-24T15:45:17.017Z",
		"updated_at": "2022-05-24T15:45:17.017Z"
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   |  not found. |

---

### 3. **Carrinho**

[ Voltar aos Endpoints ](#5-endpoints)

O objeto Carrinho é definido como:

| Campo     	| Tipo   	| Descrição                      	|
|-----------	|--------	|--------------------------------	|
| productId 	| string 	| Identificador único do produto 	|

### Endpoints
| Responsabilidade                           	| Metodo 	| Endpoints                    	| Status 	|
|--------------------------------------------	|--------	|------------------------------	|--------	|
| Adicionar produto no carrinho              	| POST   	| /cart                        	| 201    	|
| Listar todos os produtos                   	| GET    	| /cart                        	| 200    	|
| Listar único produto no carrinho              	| GET    	| /cart/:id                    	| 200    	|
| Listar carrinho de próprio usuário                  	| GET    	| /cart/:cartProdId            	| 200    	|
| Subtrai a quantidade de um produto no carrinho 	| DELETE 	| /cart/removerProd:cartProdId 	| 204    	|
| Deletar produto do carrinho                	| DELETE 	| /cart/profile                	| 204    	|

### 3.1. **Adicionar produto no carrinho**

[ Voltar aos Endpoints ](#5-endpoints)

### `/cart`

### Exemplo de Request:
```
GET /cart
Host: https://api-music-club-shop.herokuapp.com/cart
Authorization: Adm and user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
"productId":"6c37a200-258e-4980-b0e4-775cdab0c530"
}
```

### Schema de Validação com Yup:
```javascript
productId:Yup.string().required()

```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
	"subtotal": 11826,
	"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"products": [
		{
			"id": "e3c4cd60-9388-4995-b67f-1a5dcd544b04",
			"cartId": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
			"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
			"quantity": 2,
			"product": {
				"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
				"name": "Guitarra Ibanez RG320EXZ BKF",
				"price": 5913,
				"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
				"type": "Instrumento de corda",
				"quantity_stock": 100,
				"rating": 0,
				"label": "Ibanez",
				"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
				"create_at": "2022-05-24T16:13:16.944Z",
				"updated_at": "2022-05-24T16:13:16.944Z"
			}
		}
	]
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Product already added. |

---

### 3.2. **Listar produtos de todos os carrinhos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/cart`

### Exemplo de Request:
```
GET /users
Host: https://api-music-club-shop.herokuapp.com/cart
Authorization: Adm
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
		"subtotal": 11826,
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
		"products": [
			{
				"id": "e3c4cd60-9388-4995-b67f-1a5dcd544b04",
				"cartId": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
				"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
				"quantity": 2,
				"product": {
					"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
					"name": "Guitarra Ibanez RG320EXZ BKF",
					"price": 5913,
					"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
					"type": "Instrumento de corda",
					"quantity_stock": 100,
					"rating": 0,
					"label": "Ibanez",
					"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
					"create_at": "2022-05-24T16:13:16.944Z",
					"updated_at": "2022-05-24T16:13:16.944Z"
				}
			}
		]
	},
	{
		"id": "735b988f-3ab6-4adf-9f18-3a3c978f42ee",
		"subtotal": 0,
		"userId": "1a37827f-4448-4c17-8e1f-755ce795ba30",
		"products": []
	},
	{
		"id": "af10c40d-7d0f-40d4-8140-7a9f866e0d6e",
		"subtotal": 0,
		"userId": "fbc3b403-2b4d-4eb6-b0ce-c771ab338377",
		"products": []
	},
	{
		"id": "3178d523-a0ad-4e31-b18c-07871ed93516",
		"subtotal": 0,
		"userId": "b36d8b38-4939-4f34-98ef-d7117bdacce7",
		"products": []
	}
]
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 3.3. **Listar Produtos do carrinho de um único usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/cart/:id`

### Exemplo de Request:
```
GET /users/db44f1f4-a4b1-4451-be11-7920e1bcac88
Host: https://api-music-club-shop.herokuapp.com/cart/:id
Authorization: Adm
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (Product) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
	"subtotal": 11826,
	"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"products": [
		{
			"id": "e3c4cd60-9388-4995-b67f-1a5dcd544b04",
			"cartId": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
			"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
			"quantity": 2,
			"product": {
				"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
				"name": "Guitarra Ibanez RG320EXZ BKF",
				"price": 5913,
				"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
				"type": "Instrumento de corda",
				"quantity_stock": 100,
				"rating": 0,
				"label": "Ibanez",
				"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
				"create_at": "2022-05-24T16:13:16.944Z",
				"updated_at": "2022-05-24T16:13:16.944Z"
			}
		}
	]
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Cart not found. |

---

### 3.4. **Listar o carrinho de um único usuário logado**

[ Voltar aos Endpoints ](#5-endpoints)

### `/cart/:profile`

### Exemplo de Request:
```
GET /cart/profile
Host: https://api-music-club-shop.herokuapp.com/cart/:id
Authorization: Adm and user
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (Product) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
	"subtotal": 11826,
	"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"products": [
		{
			"id": "e3c4cd60-9388-4995-b67f-1a5dcd544b04",
			"cartId": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
			"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
			"quantity": 2,
			"product": {
				"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
				"name": "Guitarra Ibanez RG320EXZ BKF",
				"price": 5913,
				"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
				"type": "Instrumento de corda",
				"quantity_stock": 100,
				"rating": 0,
				"label": "Ibanez",
				"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
				"create_at": "2022-05-24T16:13:16.944Z",
				"updated_at": "2022-05-24T16:13:16.944Z"
			}
		}
	]
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Cart not found. |

---

### 3.5. **Subtrai a quantidade de um produto no cart**

[ Voltar aos Endpoints ](#5-endpoints)

### `/cart/removerProd:cartProdId`

### Exemplo de Request:
```
GET /cart/profile
Host: https://api-music-club-shop.herokuapp.com/cart/cart/removerProd:cartProdId
Authorization: Adm and user
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| cartProdId     | string      | Identificador unico do produto no carrinho  |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
	"subtotal": 11826,
	"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"products": [
		{
			"id": "e3c4cd60-9388-4995-b67f-1a5dcd544b04",
			"cartId": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
			"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
			"quantity": 1,
			"product": {
				"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
				"name": "Guitarra Ibanez RG320EXZ BKF",
				"price": 5913,
				"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
				"type": "Instrumento de corda",
				"quantity_stock": 100,
				"rating": 0,
				"label": "Ibanez",
				"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
				"create_at": "2022-05-24T16:13:16.944Z",
				"updated_at": "2022-05-24T16:13:16.944Z"
			}
		}
	]
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Cart not found. |

---

### 4. **Pedidos**

[ Voltar aos Endpoints ](#5-endpoints)

O objeto Pedidos é definido como:

| Campo         	| Tipo   	| Descrição                 	|
|---------------	|--------	|---------------------------	|
| userId        	| string 	| Identidade do usuário     	|
| status        	| string 	| Status do pedido          	|
| typeOfPayment 	| string 	| Tipo de pagamento         	|
| street        	| string 	| Rua do usuário            	|
| number        	| string 	| Número da casa do usuário 	|
| cep           	| string 	| Cep do usuário            	|
| neighborhood  	| string 	| Bairro do usuário         	|
| country       	| string 	| País do usuário           	|
| complement    	| string 	| Complemento adicional     	|
| city          	| string 	| Cidade do usuário         	|

### Endpoints
| Responsabilidade                             	| Metodo 	| Endpoints                     	| Status 	|
|----------------------------------------------	|--------	|-------------------------------	|--------	|
| Criar pedidos                                	| POST   	| /order                        	| 201    	|
| Listar todos os pedidos                      	| GET    	| /order                        	| 200    	|
| Listar os pedidos de um único usuário logado 	| GET    	| /order/profile                	| 200    	|
| Listar os pedidos de um usuário específico   	| GET    	| /order/listuserorder/:user_Id 	| 200    	|
| Listar um pedido especifico                  	| GET    	| /order/:id                    	| 200    	|
| Deletar pedidos                              	| DELETE 	| /order/:id                    	| 204    	|
| Atualizar pedidos                            	| PATCH  	| /order/:id                    	| 200    	|

---
### 4.1. **Criar pedidos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order`

### Exemplo de Request:
```
GET /order
Host: https://api-music-club-shop.herokuapp.com/order
Authorization: Adm and user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"userId":"5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"status":"pago",
  "typeOfPayment":"credit",
  "street":"blablabla",
  "number":"1231232",
  "cep":"2312321",
  "neighborhood":"daadsadas",
  "country": "dasdasd",
  "complement": "dsadasd",
  "city":"dsads"
}
```

### Schema de Validação com Yup:
```javascript
productId:Yup.string().required()

```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
	"subtotal": 11826,
	"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
	"products": [
		{
			"id": "e3c4cd60-9388-4995-b67f-1a5dcd544b04",
			"cartId": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
			"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
			"quantity": 2,
			"product": {
				"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
				"name": "Guitarra Ibanez RG320EXZ BKF",
				"price": 5913,
				"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
				"type": "Instrumento de corda",
				"quantity_stock": 100,
				"rating": 0,
				"label": "Ibanez",
				"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
				"create_at": "2022-05-24T16:13:16.944Z",
				"updated_at": "2022-05-24T16:13:16.944Z"
			}
		}
	]
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Product already added. |

---

### 4.2. **Listar Pedidos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order`

### Exemplo de Request:
```
GET /order
Host: https://api-music-club-shop.herokuapp.com/order
Authorization: Adm
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "a38c8e1b-6442-43d3-901b-b995eb11b945",
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
		"status": "pago",
		"typeOfPayment": "credit",
		"user": {
			"id": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
			"name": "Jefferson",
			"email": "jefferson@mail.com",
			"user_name": "jefferson",
			"birth_date": "18/06/1997",
			"tel": "23123124",
			"is_adm": true,
			"create_at": "2022-05-25T12:28:06.102Z",
			"updated_at": "2022-05-25T12:28:06.102Z",
			"cart": {
				"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
				"subtotal": 0,
				"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
				"products": []
			}
		},
		"address": {
			"id": "b331e6a8-2959-4014-bd9b-2a5a136de67a",
			"street": "blablabla",
			"number": 1231232,
			"cep": "2312321",
			"neighborhood": "daadsadas",
			"city": "dsads",
			"country": "dasdasd",
			"complement": "dsadasd"
		},
		"buys": {
			"id": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
			"total": 12654,
			"products": [
				{
					"id": "afff87d6-e2f4-4f5f-8465-831c9f480220",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "584362ec-7a98-451a-b1ae-968290fbe03f",
					"quantity": 1,
					"product": {
						"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
						"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
						"price": 828,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Tagima",
						"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
						"create_at": "2022-05-24T15:45:17.017Z",
						"updated_at": "2022-05-24T15:45:17.017Z"
					}
				},
				{
					"id": "c1483282-d764-4d6c-a0f2-ce32b764e56f",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
					"quantity": 2,
					"product": {
						"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
						"name": "Guitarra Ibanez RG320EXZ BKF",
						"price": 5913,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Ibanez",
						"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
						"create_at": "2022-05-24T16:13:16.944Z",
						"updated_at": "2022-05-24T16:13:16.944Z"
					}
				}
			]
		}
	}
]
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 4.3. **Listar os pedidos do próprio usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/profile`

### Exemplo de Request:
```
GET /order/profile
Host: https://api-music-club-shop.herokuapp.com/order/profile
Authorization: Adm and user
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do produto (Product) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "a38c8e1b-6442-43d3-901b-b995eb11b945",
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
		"status": "pago",
		"typeOfPayment": "credit",
		"user": {
			"id": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
			"name": "Jefferson",
			"email": "jefferson@mail.com",
			"user_name": "jefferson",
			"birth_date": "18/06/1997",
			"tel": "23123124",
			"is_adm": true,
			"create_at": "2022-05-25T12:28:06.102Z",
			"updated_at": "2022-05-25T12:28:06.102Z",
			"cart": {
				"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
				"subtotal": 0,
				"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
				"products": []
			}
		},
		"address": {
			"id": "b331e6a8-2959-4014-bd9b-2a5a136de67a",
			"street": "blablabla",
			"number": 1231232,
			"cep": "2312321",
			"neighborhood": "daadsadas",
			"city": "dsads",
			"country": "dasdasd",
			"complement": "dsadasd"
		},
		"buys": {
			"id": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
			"total": 12654,
			"products": [
				{
					"id": "afff87d6-e2f4-4f5f-8465-831c9f480220",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "584362ec-7a98-451a-b1ae-968290fbe03f",
					"quantity": 1,
					"product": {
						"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
						"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
						"price": 828,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Tagima",
						"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
						"create_at": "2022-05-24T15:45:17.017Z",
						"updated_at": "2022-05-24T15:45:17.017Z"
					}
				},
				{
					"id": "c1483282-d764-4d6c-a0f2-ce32b764e56f",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
					"quantity": 2,
					"product": {
						"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
						"name": "Guitarra Ibanez RG320EXZ BKF",
						"price": 5913,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Ibanez",
						"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
						"create_at": "2022-05-24T16:13:16.944Z",
						"updated_at": "2022-05-24T16:13:16.944Z"
					}
				}
			]
		}
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Order not found. |

---

### 4.4. **Listar Pedido de Usuário específico**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/listuserorder/:user_Id`

### Exemplo de Request:
```
GET /order/listuserorder/:user_Id
Host: https://api-music-club-shop.herokuapp.com/products/:id
Authorization: Adm
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| user_id     | string      | Identificador único do produto (Product) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "a38c8e1b-6442-43d3-901b-b995eb11b945",
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
		"status": "pago",
		"typeOfPayment": "credit",
		"user": {
			"id": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
			"name": "Jefferson",
			"email": "jefferson@mail.com",
			"user_name": "jefferson",
			"birth_date": "18/06/1997",
			"tel": "23123124",
			"is_adm": true,
			"create_at": "2022-05-25T12:28:06.102Z",
			"updated_at": "2022-05-25T12:28:06.102Z",
			"cart": {
				"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
				"subtotal": 0,
				"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
				"products": []
			}
		},
		"address": {
			"id": "b331e6a8-2959-4014-bd9b-2a5a136de67a",
			"street": "blablabla",
			"number": 1231232,
			"cep": "2312321",
			"neighborhood": "daadsadas",
			"city": "dsads",
			"country": "dasdasd",
			"complement": "dsadasd"
		},
		"buys": {
			"id": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
			"total": 12654,
			"products": [
				{
					"id": "afff87d6-e2f4-4f5f-8465-831c9f480220",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "584362ec-7a98-451a-b1ae-968290fbe03f",
					"quantity": 1,
					"product": {
						"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
						"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
						"price": 828,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Tagima",
						"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
						"create_at": "2022-05-24T15:45:17.017Z",
						"updated_at": "2022-05-24T15:45:17.017Z"
					}
				},
				{
					"id": "c1483282-d764-4d6c-a0f2-ce32b764e56f",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
					"quantity": 2,
					"product": {
						"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
						"name": "Guitarra Ibanez RG320EXZ BKF",
						"price": 5913,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Ibanez",
						"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
						"create_at": "2022-05-24T16:13:16.944Z",
						"updated_at": "2022-05-24T16:13:16.944Z"
					}
				}
			]
		}
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Order of user not found. |

---

### 4.5. **Listar um Pedido Específico**

[ Voltar aos Endpoints ](#5-endpoints)

### `/order/:id`

### Exemplo de Request:
```
GET /order/:id
Host: https://api-music-club-shop.herokuapp.com//order/:id
Authorization: Adm
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do produto (Product) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "a38c8e1b-6442-43d3-901b-b995eb11b945",
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
		"status": "pago",
		"typeOfPayment": "credit",
		"user": {
			"id": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
			"name": "Jefferson",
			"email": "jefferson@mail.com",
			"user_name": "jefferson",
			"birth_date": "18/06/1997",
			"tel": "23123124",
			"is_adm": true,
			"create_at": "2022-05-25T12:28:06.102Z",
			"updated_at": "2022-05-25T12:28:06.102Z",
			"cart": {
				"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
				"subtotal": 0,
				"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
				"products": []
			}
		},
		"address": {
			"id": "b331e6a8-2959-4014-bd9b-2a5a136de67a",
			"street": "blablabla",
			"number": 1231232,
			"cep": "2312321",
			"neighborhood": "daadsadas",
			"city": "dsads",
			"country": "dasdasd",
			"complement": "dsadasd"
		},
		"buys": {
			"id": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
			"total": 12654,
			"products": [
				{
					"id": "afff87d6-e2f4-4f5f-8465-831c9f480220",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "584362ec-7a98-451a-b1ae-968290fbe03f",
					"quantity": 1,
					"product": {
						"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
						"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
						"price": 828,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Tagima",
						"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
						"create_at": "2022-05-24T15:45:17.017Z",
						"updated_at": "2022-05-24T15:45:17.017Z"
					}
				},
				{
					"id": "c1483282-d764-4d6c-a0f2-ce32b764e56f",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "6c37a200-258e-4980-b0e4-775cdab0c530",
					"quantity": 2,
					"product": {
						"id": "6c37a200-258e-4980-b0e4-775cdab0c530",
						"name": "Guitarra Ibanez RG320EXZ BKF",
						"price": 5913,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_37406_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Ibanez",
						"description": "A linha RG da Ibanez é bastante reconhecida por ser um instrumento distinto. Foram três décadas dedicadas aos estilos do Metal, para aprimorar esta guitarra dedicada para alta performance, sendo projetada para ser tocada e muito. E se o assunto é metal esta guitarra foi feita para os estilos mais pesados.",
						"create_at": "2022-05-24T16:13:16.944Z",
						"updated_at": "2022-05-24T16:13:16.944Z"
					}
				}
			]
		}
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Order not found. |

---

### 4.6. **Atualizar Produto por ID**



[ Voltar aos Endpoints ](#5-endpoints)

### `/order/:id`

### Exemplo de Request:
```
GET /order/:id
Host: https://api-music-club-shop.herokuapp.com//order/:id
Authorization: Adm 
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do produto (Product) |

### Corpo da Requisição:
```json
{
	"status": "pago"
}
```

### Exemplo de Response:
```
200 OK
```

```json
[
	{
		"id": "a38c8e1b-6442-43d3-901b-b995eb11b945",
		"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
		"status": "pago",
		"typeOfPayment": "credit",
		"user": {
			"id": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
			"name": "Jefferson",
			"email": "jefferson@mail.com",
			"user_name": "jefferson",
			"birth_date": "18/06/1997",
			"tel": "23123124",
			"is_adm": true,
			"create_at": "2022-05-25T12:28:06.102Z",
			"updated_at": "2022-05-25T12:28:06.102Z",
			"cart": {
				"id": "ca98ceb8-3a95-4ab0-ba76-06be3d1a86ad",
				"subtotal": 0,
				"userId": "5277eb05-78c1-45bc-a62a-027064ba6fe3",
				"products": []
			}
		},
		"address": {
			"id": "b331e6a8-2959-4014-bd9b-2a5a136de67a",
			"street": "blablabla",
			"number": 1231232,
			"cep": "2312321",
			"neighborhood": "daadsadas",
			"city": "dsads",
			"country": "dasdasd",
			"complement": "dsadasd"
		},
		"buys": {
			"id": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
			"total": 12654,
			"products": [
				{
					"id": "afff87d6-e2f4-4f5f-8465-831c9f480220",
					"buyId": "5fd0677a-49ef-4ca5-9a16-35f0a61825aa",
					"productId": "584362ec-7a98-451a-b1ae-968290fbe03f",
					"quantity": 1,
					"product": {
						"id": "584362ec-7a98-451a-b1ae-968290fbe03f",
						"name": "Violão Tagima Dallas T SB Elétrico Aço Sunburst",
						"price": 828,
						"img_url": "https://www.musitechinstrumentos.com.br/files/pro_36701_g.jpg",
						"type": "Instrumento de corda",
						"quantity_stock": 100,
						"rating": 0,
						"label": "Tagima",
						"description": "Trazendo sempre qualidade e tradição, o violão Tagima Dallas tem madeiramento de Natowood em fundo e laterais, topo em Spruce, captação com afinador e qualidade excepcional de tocabilidade.",
						"create_at": "2022-05-24T15:45:17.017Z",
						"updated_at": "2022-05-24T15:45:17.017Z"
					}
				}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   |  not found. |

---

### 5. **Endereços**

[ Voltar aos Endpoints ](#5-endpoints)

O objeto Endereços é definido como:

| Campo        	| Tipo   	| Descrição                          	|
|--------------	|--------	|------------------------------------	|
| user_id      	| string 	| Identidade do usuário              	|
| street       	| string 	| Endereço do usuário                	|
| number       	| string 	| Numero da residência do usuario    	|
| cep          	| string 	| Cep do usuário                     	|
| neighborhood 	| string 	| Bairro do usuário                  	|
| country      	| string 	| País do usuário                    	|
| complement   	| string 	| Complemento do endereço do usuário 	|
| city         	| string 	| Cidade do usuário                  	|

### Endpoints
| Responsabilidade                  	| Metodo 	| Endpoints         	| Status 	|
|-----------------------------------	|--------	|-------------------	|--------	|
| Criar endereços                   	| POST   	| /address          	| 201    	|
| Listar todos os endereços         	| GET    	| /address          	| 200    	|
| Listar apenas um endereço         	| GET    	| /address/:user_id 	| 200    	|
| Atualizar os dados de um endereço 	| PATCH  	| /address/:id      	| 200    	|
| Deletar produto do banco          	| DELETE 	| /address/:id      	| 204    	|
---

### 5.1. **Criação de Endereço**

[ Voltar para os Endpoints ](#5-endpoints)

### `/address`

### Exemplo de Request:
```
POST /address
Host: https://api-music-club-shop.herokuapp.com/address
Authorization: Adm and user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"user_id":"5277eb05-78c1-45bc-a62a-027064ba6fe3",
  "street":"daksddsa",
  "number":"1231231",
  "cep":"dasdasda",
  "neighborhood":"dasdasdsad",
  "country": "dsadasd",
  "complement": "dsadasds",
  "city":"dasdasdsd"
}
```


### Exemplo de Response:
```
201 Created
```

```json
[
	{
		"id": "bbbc6f61-4234-4963-8fc5-860f90218260",
		"street": "daksddsa",
		"number": 1231231,
		"cep": "dasdasda",
		"neighborhood": "dasdasdsad",
		"city": "dasdasdsd",
		"country": "dsadasd",
		"complement": "dsadasds"
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Address already registered. |

---

### 5.2. **Listando Endereços**

[ Voltar aos Endpoints ](#5-endpoints)

### `/address`

### Exemplo de Request:
```
GET /address
Host: https://api-music-club-shop.herokuapp.com/users
Authorization: Adm
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
		"name": "Thiago Henrique Monserrat",
		"email": "thiagomonserrat@gmail.com",
		"user_name": "thiagomonserrat",
		"birth_date": "11/07/1998",
		"tel": "+55(31)998403490",
		"is_adm": false,
		"create_at": "2022-05-24T15:10:45.965Z",
		"updated_at": "2022-05-24T15:10:45.965Z",
		"cart": {
			"id": "4e28c5ca-4533-4000-a5cd-fed02a7ab58b",
			"subtotal": 0,
			"userId": "db44f1f4-a4b1-4451-be11-7920e1bcac88",
			"products": []
		}
	}
]
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 5.3. **Listar Apenas um Endereço**

[ Voltar aos Endpoints ](#5-endpoints)

### ` /address/:user_id`

### Exemplo de Request:
```
GET  /address/:user_id
Host: https://api-music-club-shop.herokuapp.com/address/:user_id
Authorization: Adm
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| user_id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "bbbc6f61-4234-4963-8fc5-860f90218260",
	"street": "daksddsa",
	"number": 1231231,
	"cep": "dasdasda",
	"neighborhood": "dasdasdsad",
	"city": "dasdasdsd",
	"country": "dsadasd",
	"complement": "dsadasds"
}
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 5.4. **Atualizar os dados de Endereço por ID**



[ Voltar aos Endpoints ](#5-endpoints)

### `/address/:id`

### Exemplo de Request:
```
GET /users/db44f1f4-a4b1-4451-be11-7920e1bcac88
Host: https://api-music-club-shop.herokuapp.com//address/:id
Authorization: Adm e próprio usuário
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
	"user_id":"5277eb05-78c1-45bc-a62a-027064ba6fe3",
  "street":"Rua das carmelitas",
  "number":"123",
  "cep":"73821321",
  "neighborhood":"Vila Nova",
  "country": "Jamaica",
  "complement": "Bong Bong",
  "city":"Vladivos"
}
```

### Exemplo de Response:
```
200 OK
```

```json
[
	{
		"id": "bbbc6f61-4234-4963-8fc5-860f90218260",
		"street": "Rua das carmelitas",
		"number": 123,
		"cep": "73821321",
		"neighborhood": "Vila Nova",
		"city": "Vladivos",
		"country": "Jamaica",
		"complement": "Bong Bong"
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | Address not found. |

---
