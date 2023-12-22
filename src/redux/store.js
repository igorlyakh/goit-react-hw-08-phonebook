import { contactsReducer } from './contactsSlice/contactsSlice';
import { userReducer } from './userSlice/userSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
  },
});
