import React from "react";
// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import { ContactWrapper, ContactName, ContactNumber, DeleteButton } from './ContactListItem.styled'

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id))
    return (
      <ContactWrapper key={id}>
        <ContactName>
            {name}
            <ContactNumber> 
                {number}
            </ContactNumber>
        </ContactName>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactWrapper>
    );
  }; 

export default ContactListItem;

// ContactListItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
//   };
  