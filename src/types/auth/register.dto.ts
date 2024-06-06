// {
//     "name": "Example",
//     "email": "example@test.com",
//     "password": "123456"
//   }

export type RegisterDto = {
  name: string;
  email: string;
  password: string;
};

// {
//   "userId": "random-uuid"
// }
export type RegisterResponse = {
  userId: string;
};
