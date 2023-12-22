import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
});

export const contactsReducer = contactSlice.reducer;
