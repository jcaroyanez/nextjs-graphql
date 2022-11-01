// store.js
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../reducer/reducer';

// create a makeStore function
const makeStore = () => configureStore({
  reducer
});

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});