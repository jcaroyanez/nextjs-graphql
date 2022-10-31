import prisma from '../../../lib/primsa';

export const allProperties = () => {
  return prisma.properties.findMany()
}

export const findProperty = (numProperty) => {
  return prisma.properties.findUnique({
    where: {
      numProperty
    }
  })
}

const mapIfThereIsLand = (land) => {
  if(land) {
    return {
      land: {
        create: land
      }
    }
  }

  return {}
}

export const saveProperty = async ({ property, owners, constructions, land }) => {
  console.log(land);
  let propertyCreated = await prisma.properties.create({
    data: {
      ...property,
      owners: {
        create: [
          ...owners
        ]
      },
      constructions: {
        create: [
          ...constructions
        ]
      },
      ...mapIfThereIsLand(land)
    }
  })

  return propertyCreated
}