import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { GiRotaryPhone } from 'react-icons/gi';
import { fetchContacts } from '../../src/redux/operations';
import { selectIsLoading } from '../../src/redux/selectors';
import { ContactForm } from '../../src/components/ContactForm/ContactForm';
import { ContactList } from '../../src/components/ContactList/ContactList';
import { selectContacts } from '../../src/redux/selectors';
import { Filter } from '../components/Filter/Filter';
import { selectError } from '../../src/redux/selectors';
import {
  Container,
  FormContainer,
  StatisticsContainer,
  ContactsHeading,
  MainHeading,
  NoContactsText,
} from '../../src/components/Container.styled.js';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <FormContainer>
        <MainHeading>
          Phonebook <GiRotaryPhone />
        </MainHeading>
        <ContactForm />
      </FormContainer>
      <StatisticsContainer>
        <ContactsHeading>Contacts</ContactsHeading>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts?.length ? (
          <ContactList />
        ) : (
          <NoContactsText>
            There are no contacts in your phoneboook
          </NoContactsText>
        )}
      </StatisticsContainer>
    </Container>
  );
}
