import { ACTION_CONSTRUCTION, ACTION_OWNERS } from "../actions/actions"

const initState = {
  owners: [],
  constructions: []
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
    default:
      return state
  }
}