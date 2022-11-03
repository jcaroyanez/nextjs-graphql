import prisma from '@Lib/primsa';

export const allProperties = () => {
  return prisma.properties.findMany({
    where: {
      actived: true
    }
  })
}

export const thereIsProperty = async (numProperty) => {
  const result = await prisma.properties.findUnique({
    where: {
      numProperty
    }
  })

  if(result) {
    return true
  }

  return false
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

export const deleteProperty = async(id) => {
  const updateProperty = await prisma.properties.update({
    where: {
      id
    },
    data: {
      actived: false
    }
  })

  return updateProperty
}

export const findProperty = async(id) => {
 const {owners, constructions, land, ...propertyProps} = await prisma.properties.findUnique({
  where: {
    id
  },
  include: {
    owners: true,
    constructions: true,
    land: true
  }
 })

 const propertyFormat = {
   property: propertyProps,
   owners,
   constructions,
   land: land.length? land[0] : null
 }

 return propertyFormat
}