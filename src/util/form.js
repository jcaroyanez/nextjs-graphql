import { ENTITY_STATE_MESSAGE } from "@Definitions/constant/constant"
import { notification } from "antd"

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