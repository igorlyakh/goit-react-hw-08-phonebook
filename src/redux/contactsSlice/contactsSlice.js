import { createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts, removeContact } from '../actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, state => state)
      .addCase(getContacts.pending, state => state)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(removeContact.rejected, state => state)
      .addCase(removeContact.pending, state => state)
      .addCase(createContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, state => state)
      .addCase(createContact.pending, state => state);
  },
});

export const contactsReducer = contactSlice.reducer;
