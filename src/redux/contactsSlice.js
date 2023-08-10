import { toast } from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },

  reducers: {
    addContacts(state, action) {
      state.users.unshift(action.payload);
      toast.success('Create new user successfully');
    },
    deleteContacts(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
      toast.error('Delete user successfully');
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
