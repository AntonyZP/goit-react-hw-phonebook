import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Section,  Title, SubTitle, ListWrapper} from "components/App/App.styled";

export const App = () => {
  return ( 
    <Section>
      <Title>Phonebook</Title>
      <ContactForm ></ContactForm>
        <SubTitle>Contacts</SubTitle>
      <ListWrapper>
        <Filter />      
        <ContactList />
      </ListWrapper>
    </Section>
    );
  };

