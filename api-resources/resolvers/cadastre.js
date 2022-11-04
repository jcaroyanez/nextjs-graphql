import {
  saveProperty,
  allProperties,
  thereIsProperty,
  deleteProperty,
  findProperty,
  thereIsPropertyUpdate,
  updateProperty
} from '../services/cadastre';

const resolvers = {
  Query: {
    allProperties: (_root) => {
      return allProperties()
    },
    thereIsProperty: (_root, args) => {
      return thereIsProperty(args.numProperty)
    },
    findProperty: async (_root, args) => {
      const { id } = args
      return findProperty(id)
    },
    thereIsPropertyUpdate: (_root, args) => {
      const { id, numProperty } = args
      return thereIsPropertyUpdate({ id, numProperty })
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
    },
    updateProperty: (_root, args) => {
      const { property, constructions, owners, land } = args
      return updateProperty({ property, constructions, owners, land })
    }
  }
}

export default resolvers;