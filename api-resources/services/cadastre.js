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

  if (result) {
    return true
  }

  return false
}

const mapIfThereIsLand = (land) => {
  if (land) {
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

export const deleteProperty = async (id) => {
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

export const findProperty = async (id) => {
  const { owners, constructions, land, ...propertyProps } = await prisma.properties.findUnique({
    where: {
      id
    },
    include: {
      owners: {
        where: {
          actived: true
        }
      },
      constructions: {
        where: {
          actived: true
        }
      },
      land: {
        where: {
          actived: true
        }
      }
    }
  })

  const propertyFormat = {
    property: propertyProps,
    owners,
    constructions,
    land: land.length ? land[0] : null
  }

  return propertyFormat
}

export const thereIsPropertyUpdate = async ({ id, numProperty }) => {
  const data = await prisma.properties.findMany({
    where: {
      AND: {
        numProperty
      },
      NOT: {
        id
      }
    }
  })

  if (data.length) {
    return true
  }

  return false
}

export const updateProperty = async ({ property, constructions, owners, land }) => {
  const newConstruction = constructions.filter(contruction => !contruction.id)
  const newOwner = owners.filter(owner => !owner.id)
  const newLand = land?.id ? null : land
  const constructionIds = constructions
    .filter(contruction => contruction.id)
    .map(contructionFilter => contructionFilter.id)

  const ownerIds = owners
    .filter(owner => owner.id)
    .map(ownerFilter => ownerFilter.id)

  await prisma.constructions.updateMany({
    where: {
      AND: {
        idProperty: property.id
      },
      NOT: {
        id: {
          in: [...constructionIds]
        }
      }
    },
    data: {
      actived: false
    }
  })

  await prisma.owners.updateMany({
    where: {
      AND: {
        idProperty: property.id
      },
      NOT: {
        id: {
          in: [...ownerIds]
        }
      }
    },
    data: {
      actived: false
    }
  })

  const landFind = await prisma.lands.findMany({
    where: {
      idProperty: property.id,
      actived: true
    }
  })

  if (landFind.length && !land) {
    await prisma.lands.update({
      where: {
        id: landFind[0].id
      },
      data: {
        actived: false
      }
    })
  }

  const propertyUpdate = await prisma.properties.upsert({
    where: {
      id: property.id
    },
    update: {
      ...property,
      constructions: {
        create: [
          ...newConstruction
        ]
      },
      owners: {
        create: [
          ...newOwner
        ]
      },
      ...mapIfThereIsLand(newLand)
    },
    create: {
      ...property,
      constructions: {
        create: [
          ...newConstruction
        ]
      },
      owners: {
        create: [
          ...newOwner
        ]
      },
      ...mapIfThereIsLand(newLand)
    }
  })

  return propertyUpdate
}