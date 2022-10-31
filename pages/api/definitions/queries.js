import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Property {
    id: ID!
    numProperty: String!
    appraisal: Int!
    name: String!
    department: String!
    municipality: String!
  }

  type Owner {
    id: ID!
    type: String!
    typeDocument: String!
    document: String!
    name: String!
    address: String!
    phone: String!
    email: String!
  }

  type Construction {
    id: ID!
    numberOfFloors: Int!
    totalArea: Int!
    type: String!
  }

  type Land {
    id: ID!
    area: Int!
    commercialValue: Int!
    hasWaterSources: Boolean!
    typeLand: String!
    hasConstructions: Boolean!
  }

  input PropertyInput {
    numProperty: String!
    appraisal: Int!
    name: String!
    department: String!
    municipality: String!
  }

  input OwnerInput {
    type: String!
    typeDocument: String!
    document: String!
    name: String!
    address: String!
    phone: String!
    email: String!
  }

  input ConstructionInput {
    numberOfFloors: Int!
    totalArea: Int!
    type: String!
  }

  input LandInput {
    area: Int!
    commercialValue: Int!
    hasWaterSources: Boolean!
    typeLand: String!
    hasConstructions: Boolean!
  }

  type Query {
    allProperties: [Property]
    findProperty(
      numProperty: String!
    ): Property
  }

  type Mutation {
    createdProperty(
      property: PropertyInput!
      owners: [OwnerInput]!
      constructions: [ConstructionInput]!
      land: LandInput
    ): Property
  }
`

export default typeDefs;