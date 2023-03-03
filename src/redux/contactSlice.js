import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../contacts.json';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContact:{
            reducer(state, action) {
                state.push(action.payload)
            }
        },
        deleteContact(state, action) {
            const idx=state.findIndex(contact =>
                contact.id ===action.payload)
            state.splice(idx,1)
        }
    }
})
 
export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer