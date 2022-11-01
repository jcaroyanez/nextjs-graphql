export const ACTION_TYPE = {
  SET_PROPERTIES: '@properties/set' 
}

export const creatorSetProperties = (payload) => {
  return {
    type: ACTION_TYPE.SET_PROPERTIES,
    payload
  }
}