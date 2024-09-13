export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
    favoriteMovies:[Movie]
  }
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies:[Movie!]!
    movie(name: String!):Movie!
  }
  input CreateUserInput{
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = CHILE
  }
  input updateUserNameInput{
  id: ID!
  newUserName:String!
  }
  type Mutation{
  createUser(input:CreateUserInput!): User
    updateUserName(input: updateUserNameInput!):User
    deleteUser(id:ID!):User
  }

  enum Nationality{
  CANADA
  BRAZIL
  INDIA
  GERMANY
  CHILE
  }
`;
