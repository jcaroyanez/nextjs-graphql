import { configureStore } from '@reduxjs/toolkit'
import { cadastreReducer } from '../reducer/reducer'

const store = configureStore({
  reducer: cadastreReducer
})

export default store