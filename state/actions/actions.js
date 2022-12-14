export const ACTION_OWNERS = {
  add: '@owner/add',
  delete: '@owner/delete'
}

export const ACTION_CONSTRUCTION = {
  add: '@contruction/add',
  delete: '@contruction/delete'
}

export const ACTION_LAND = {
  add: '@land/add',
  delete: '@land/delete'
}

export const ACTION_CADASTRE = {
  reset: '@cadastre/reset',
  updateAll: '@cadastre/updateAll'
}

export const creatorAddOwner = (owner) => {
  return {
    type: ACTION_OWNERS.add,
    payload: owner
  }
}

export const creatorDeleteOwner = (document) => {
  return {
    type: ACTION_OWNERS.delete,
    payload: document
  }
}

export const creatorAddContrunction = (contruction) => {
  return {
    type: ACTION_CONSTRUCTION.add,
    payload: contruction
  }
}

export const creatorDeleteContruction = (document) => {
  return {
    type: ACTION_CONSTRUCTION.delete,
    payload: document
  }
}

export const creatorAddLand = (land) => {
  return {
    type: ACTION_LAND.add,
    payload: land
  }
}

export const creatorCadastreResetState = () => {
  return {
    type: ACTION_CADASTRE.reset,
  }
}

export const creatorCadastreUpdateAll = (property) => {
  return {
    type: ACTION_CADASTRE.updateAll,
    payload: property
  }
}

export const creatorDeleteLand = () => {
  return {
    type: ACTION_LAND.delete
  }
}