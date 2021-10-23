import { gql } from 'apollo-server';

export const typeDefs = gql`
    type User {
        id: ID
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        comments: [Comment]
    }

    type Post {
        id: ID
        author: User!
        comments: [Comment]
        content: String!
        createdAt: String!
        updatedAt: String!
    }

    type Comment {
        id: ID!
        author: User!
        commentary: String!
        likes: [Int]!
        createdAt: String
        updatedAt: String
    }

    type Query {
        getPosts: [Post!]!
        getUsers: [User!]!
        getComments: [Comment!]!
    }
`;