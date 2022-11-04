import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Property {
    id: ID!
    numProperty: String!
    appraisal: String!
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
    numberOfFloors: String!
    totalArea: String!
    type: String!
    address: String!
  }

  type Land {
    id: ID!
    area: String!
    commercialValue: String!
    hasWaterSources: Boolean!
    typeLand: String!
    hasConstructions: Boolean!
  }

  type Cadastre {
    property: Property
    owners: [Owner]
    constructions: [Construction]
    land: Land
  }

  input PropertyInput {
    id: Int
    numProperty: String!
    appraisal: String!
    name: String!
    department: String!
    municipality: String!
  }

  input OwnerInput {
    id: Int
    type: String!
    typeDocument: String!
    document: String!
    name: String!
    address: String!
    phone: String!
    email: String!
  }

  input ConstructionInput {
    id: Int
    numberOfFloors: String!
    totalArea: String!
    type: String!
    address: String!
  }

  input LandInput {
    id: Int
    area: String!
    commercialValue: String!
    hasWaterSources: Boolean!
    typeLand: String!
    hasConstructions: Boolean!
  }

  type Query {
    allProperties: [Property]
    thereIsProperty(
      numProperty: String!
    ): Boolean
    findProperty(id: Int!): Cadastre
    thereIsPropertyUpdate(id: Int!, numProperty: String!): Boolean
  }

  type Mutation {
    createdProperty(
      property: PropertyInput!
      owners: [OwnerInput]!
      constructions: [ConstructionInput]!
      land: LandInput
    ): Property
    updateProperty(
      property: PropertyInput!
      owners: [OwnerInput]!
      constructions: [ConstructionInput]!
      land: LandInput
    ): Property
    deleteProperty(
      id: Int!
    ): Property
  }
`

export default typeDefs;