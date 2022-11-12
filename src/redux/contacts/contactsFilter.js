import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { createSlice } from '@reduxjs/toolkit';
import { filterContact } from './contactsActions';

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});
// const filter = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setContact: (_, { payload }) => payload,
//     },
//   })

export default filterReducer;
// export const { setContact } = filter.actions;

// export default combineReducers({ filter });
