import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUserName = state => state.user.userName;
export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
