import { ACTION_CADASTRE, ACTION_CONSTRUCTION, ACTION_LAND, ACTION_OWNERS } from '../actions/actions'

const initState = {
  property: null,
  owners: [],
  constructions: [],
  land: null
}

export const cadastreReducer = (state = initState, action) => {
  switch(action.type) {
    case ACTION_OWNERS.add:
      return{
        ...state,
        owners: [...state.owners, action.payload]
      }
    case ACTION_OWNERS.delete:
      return {
        ...state,
        owners: state.owners.filter(owner => owner.document !== action.payload)
      }
    case ACTION_CONSTRUCTION.add:
      return {
        ...state,
        constructions: [...state.constructions, action.payload]
      }
    case ACTION_CONSTRUCTION.delete:
      return {
        ...state,
        constructions: state.constructions
          .filter(contruction => contruction.id !== action.payload)
      }
    case ACTION_LAND.add: {
      return {
        ...state,
        land: action.payload
      }
    }
    case ACTION_LAND.delete: 
      return {
        ...state,
        land: null
      }
    case ACTION_CADASTRE.reset: {
      return {
        ...initState
      }
    }
    case ACTION_CADASTRE.updateAll: {
      return {
        ...action.payload
      }
    }
    default:
      return state
  }
}