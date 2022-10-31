import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Property {
    id: ID!
    numProperty: String!
    appraisal: String!
    name: String!
    department: String!
    municipality: String!
  }

  type Query {
    allProperties: [Property]
  }
`

export default typeDefs;