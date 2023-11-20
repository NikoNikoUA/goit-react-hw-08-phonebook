import { ContactsList } from './ContactList.styled';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
};
