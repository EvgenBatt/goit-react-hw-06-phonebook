import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.users;
export const selectFilter = state => state.filter;

export const selectVisibleContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
