import prisma from '@Lib/primsa';
import { saveProperty, allProperties, findProperty } from '../services/cadastre';

const resolvers = {
  Query: {
    allProperties: (_root) => {
      return allProperties()
    },
    findProperty: async (_root, args) => {
      return findProperty(args.numProperty)
    }
  },
  Mutation: {
    createdProperty: (_root, args) => {
      const { property, owners, constructions, land } = args;
      return saveProperty({ property, owners, constructions, land })
    }
  }
}

export default resolvers;