import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../../src/redux/operations';
import { selectIsLoading } from '../../src/redux/selectors';
import { ContactForm } from '../../src/components/ContactForm/ContactForm';
import { ContactList } from '../../src/components/ContactList/ContactList';
import { selectContacts } from '../../src/redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      {contacts?.length ? (
        <ContactList />
      ) : (
        // <NoContactsText>
        <div>There are no contacts in your phoneboook</div>
        // </NoContactsText>
      )}
    </>
  );
}
