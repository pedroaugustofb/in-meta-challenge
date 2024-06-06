// {
//     "email": "example@test.com",
//     "password": "123456"
//   }
export type LoginDto = {
  email: string;
  password: string;
};

// {
//     "token": "jwt-token",
//     "user": {
//       "id": "random-uuid",
//       "name": "Example",
//       "email": "example@test.com"
//     }
//   }
export type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
