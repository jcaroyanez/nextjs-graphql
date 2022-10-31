import prisma from '../../../lib/primsa';

const resolvers = {
  Query: {
    allProperties: (_root) => {
      return prisma.properties.findMany()
    }
  }
}

export default resolvers;