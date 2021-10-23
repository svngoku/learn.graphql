import { Comment, User, Post } from "./type";

const users = [
    {
      id: '1',
      email: 'elisa.benet@gmail.com',
      password: 'password',
      firstName: 'Bennet',
      lastName: 'Elizabeth',
    },
    {
      id: '2',
      email: 'darcy.fitzwilliam@gmail.com',
      password: 'password',
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
    }
  ];

const resolvers = {
    Query: {
        getUsers() {
            return users.map(user => user);
          }
    },
}


export { resolvers };
