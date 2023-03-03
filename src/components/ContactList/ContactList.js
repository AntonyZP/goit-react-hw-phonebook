import React from "react";
// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import ContactListItem from 'components/ContactListItem';
import { getContacts, getContactsFilter } from "redux/selectors";

const getVisibleContacts = (contacts, filter) => {
  const visibleContacts = [];
  // &????????????
  
  contacts.filter(contact => {
    if (contact.name.includes(filter.toLowerCase())) {
      return visibleContacts.push(contact);
    }
    return visibleContacts;
  });
  return visibleContacts;
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul>
       {visibleContacts &&
        visibleContacts.map(contact => {
          const { name, id, number } = contact;
          return (
            <ContactListItem 
              key={id} 
              id={id} 
              name={name} 
              number={number} 
            />
          );
        })}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };