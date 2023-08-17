export const typeDefs = `#graphql
  type Game{ 
    id: ID!
    title: String!
    platform: [String!]! 
    }

  type Author{
    id: String!
    name: String!
    verified: Boolean!
  }
  type DeleteGameResponse {
  success: Boolean!
  message: String!
  updatedGames: [Game]
}

type DeleteAuthoreResponse {
  success: Boolean!
  message: String!
  updatedAuthors: [Author]
}

  type Query {
    games: [Game]
    game(id:ID!):Game
    authors: [Author]
    author(id:ID!):Author
  }

  type Mutation {
    deleteGame(id:ID!):DeleteGameResponse
    deleteAuthor(id:ID!):DeleteAuthoreResponse
  }

`;
