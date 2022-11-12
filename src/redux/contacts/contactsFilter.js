// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// import { filterContact } from './contactsActions';

// const filter = createReducer('', {
//   [filterContact]: (_, { payload }) => payload,
// });
const filter = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setContact: (state, { payload }) => {
      return { ...state, value: payload };
    },
  },
});

export default filter.reducer;
export const { setContact } = filter.actions;

// export default combineReducers({ filter });
