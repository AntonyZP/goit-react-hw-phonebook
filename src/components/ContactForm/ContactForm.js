import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
// import PropTypes from 'prop-types';
// import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';
import { Label, ContactInput, AddButton} from './ContactForm.styled'

const userSchema  = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(7).max(13).required(),
  });

const initialValues = {
    name: '',
    number: '',
};

export const ContactForm =({onSubmit})=> {
    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    dispatch(addContact(values));
    resetForm();
  };

    return (     
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema }
    >
        {props => 
                <Form autoComplete='off'>
                <div>
                    <Label>
                    Name
                    <ContactInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </Label>
                    <Label>
                    Number
                    <ContactInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                    </Label>
                </div>            
                <AddButton type='submit' disabled={!props.values.name || !props.values.number} >
                            Add contact                           
                </AddButton>
            </Form> }
 
    </Formik>
    );
}
        
export default ContactForm;

// ContactForm.propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
//     onSubmit: PropTypes.func.isRequired,
// };

