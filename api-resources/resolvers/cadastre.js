import { saveProperty, allProperties, thereIsProperty, deleteProperty, findProperty } from '../services/cadastre';

const resolvers = {
  Query: {
    allProperties: (_root) => {
      return allProperties()
    },
    thereIsProperty: (_root, args) => {
      return thereIsProperty(args.numProperty)
    },
    findProperty: async(_root, args) => {
      const { id } = args
      return findProperty(id)
    }  
  },
  Mutation: {
    createdProperty: (_root, args) => {
      const { property, owners, constructions, land } = args;
      return saveProperty({ property, owners, constructions, land })
    },
    deleteProperty: (_root, args) => {
      const { id } = args;
      return deleteProperty(id)
    }
  }
}

export default resolvers;