import { ENTITY_STATE_MESSAGE } from '@Definitions/constant/constant'
import { notification } from 'antd'

export const validForm = (state) => {
  const isValid = Object.keys(ENTITY_STATE_MESSAGE).every((value) => {
    if (!state[value].length) {
      notification['error']({
        message: ENTITY_STATE_MESSAGE[value]
      })
      return false
    }

    return true
  })

  return isValid
}

export const mapState = (state) => {
  return {
    ...state,
    constructions: state.constructions.map(construction => {
      const cwraper = { ...construction };
      delete cwraper.id

      return cwraper;
    })
  }
}

export const mapStateUpdateProperty = ({property, owners , constructions, land}) => {
  return {
    property: {...property, id: parseInt(property.id)}, 
    owners: owners.map(owner => {
      if(owner.id) {
        return {...owner, id: parseInt(owner.id)}
      }

      return owner
    }),
    constructions: constructions.map(contruction => {
      const parseId = parseInt(contruction.id)
      if(isNaN(parseId)){
        const dataNotId = {...contruction}
        delete dataNotId.id
        return dataNotId
      }

      return {...contruction, id: parseInt(contruction.id)}
    }),
    land: land && land.id ? {...land, id: parseInt(land.id)} : land
  }
}