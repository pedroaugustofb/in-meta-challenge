This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Reference:

## Teste prático INMETA (2024)

Nesse teste você desenvolverá um simples marketplace para troca de cartas, o design é por sua conta.

**Requisitos:**

- Vue 3 (preferencialmente) ou React

**Instruções:**

- Usuário deve poder se registrar e fazer login
- O usuário pode adicionar cartas a sua própria conta
- O usuário pode criar uma solicitação de troca
  - Ele deve escolher quais cartas da sua conta que pretende oferecer
  - Deve poder escolher entre todas cartas registradas quais ele quer receber
- O usuário deve poder deletar solicitações de troca que criou
- Todos usuários e visitantes tem acesso a pagina inicial de marketplace mostrando as solicitações de troca abertas

## Documentação de API

**URL**: https://cards-marketplace-api.onrender.com/

> [!CAUTION]
> A API hiberna após inatividade, por isso, às vezes ela pode demorar alguns minutos para reiniciar depois de um periodo em inatividade.

---

**POST** `/register`

Registra um usuário

**Request body:**

```json
{
  "name": "Example",
  "email": "example@test.com",
  "password": "123456"
}
```

**Response body:**

```json
{
  "userId": "random-uuid"
}
```

---

**POST** `/login`

Realiza o login, retorna um Bearer token para ser usado no header `Authorization`

**Request body:**

```json
{
  "email": "example@test.com",
  "password": "123456"
}
```

**Response body:**

```json
{
  "token": "jwt-token",
  "user": {
    "id": "random-uuid",
    "name": "Example",
    "email": "example@test.com"
  }
}
```

---

**GET** `/me`

Retorna informações do usuário logado

**Response body:**

```json
{
  "id": "random-uuid",
  "name": "Example",
  "email": "example@test.com",
  "cards": [
    {
      "id": "card-uuid",
      "name": "Test",
      "description": "Description test",
      "imageUrl": "https://www.duelshop.com.br/30260-thickbox_default/baronne-de-fleur-ra01-en034-super-rare.jpg",
      "createdAt": "2024-02-15T16:40:14.677Z"
    }
  ]
}
```

---

**GET** `/cards`

Retorna todas as cartas registradas no sistema

**Query:**

```json
{
  "rpp": 10,
  "page": 1
}
```

**Response body:**

```json
{
  "list": [
    {
      "id": "card-uuid",
      "name": "Test",
      "description": "Description test",
      "imageUrl": "https://www.duelshop.com.br/30260-thickbox_default/baronne-de-fleur-ra01-en034-super-rare.jpg",
      "createdAt": "2024-02-15T16:40:14.677Z"
    }
  ],
  "rpp": 10,
  "page": 1,
  "more": false
}
```

---

**POST** `/me/cards`

Adiciona cartas ao usuário

**Request body:**

```json
{
  "cardIds": ["card-uuid"]
}
```

---

**GET** `/me/cards`

Retorna todas as cartas do usuário logado

**Response body:**

```json
[
  {
    "id": "card-uuid",
    "name": "A Shattered, Colorless Realm",
    "description": "If \"Vicious Astraloud\" is on the field: Target 1 card on the field; destroy it, then, if the destroyed card's original name was \"Vicious Astraloud\", you can Special Summon 1 of your banished \"Visas Starfrost\", or if it was not, you can make 1 \"Vicious Astraloud\" you control gain 1500 ATK.",
    "imageUrl": "https://images.ygoprodeck.com/images/cards/44553392.jpg",
    "createdAt": "2024-02-16T12:00:19.173Z"
  }
]
```

---

**POST** `/trades`

Cria uma solicitação de troca

**Request body:**

```json
{
  "cards": [
    {
      "cardId": "card-uuid",
      "type": "OFFERING"
    },
    {
      "cardId": "new-card-uuid",
      "type": "RECEIVING"
    }
  ]
}
```

**Response body:**

```json
{
  "tradeId": "trade-uuid"
}
```

---

**GET** `/trades`

Retorna todas solicitações de troca registradas

**Query:**

```json
{
  "rpp": 10,
  "page": 1
}
```

**Response body:**

```json
{
  "list": [
    {
      "id": "trade-uuid",
      "userId": "random-uuid",
      "createdAt": "2024-02-15T17:15:08.807Z",
      "user": {
        "name": "Example"
      },
      "tradeCards": [
        {
          "id": "trade-card-uuid-1",
          "cardId": "card-uuid",
          "tradeId": "trade-uuid",
          "type": "OFFERING",
          "card": {
            "id": "card-uuid",
            "name": "Test",
            "description": "Description test",
            "imageUrl": "https://www.duelshop.com.br/30260-thickbox_default/baronne-de-fleur-ra01-en034-super-rare.jpg",
            "createdAt": "2024-02-15T16:40:14.677Z"
           }
        },
        {
          "id": "trade-card-uuid-2",
          "cardId": "card-uuid-2",
          "tradeId": "trade-uuid",
          "type": "RECEIVING",
          "card": {
            "id": "card-uuid-2",
            "name": "Card 2",
            "description": "Card 2 description",
            "imageUrl": "https://www.duelshop.com.br/30375-large_default/pot-of-prosperity-ra01-en066-ultra-rare.jpg"
            "createdAt": "2024-02-15T16:43:30.621Z"
          }
        }
      ]
    }
  ],
  "rpp": 10,
  "page": 1,
  "more": false
}
```

---

**DELETE** `/trades/:id`

Remove uma solicitação de troca
