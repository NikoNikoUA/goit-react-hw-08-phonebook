import { ContactsList } from './ContactList.styled';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../../src/redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, contactId }) => {
        return (
          <ContactListItem
            key={contactId}
            id={contactId}
            name={name}
            number={number}
          />
        );
      })}
    </ContactsList>
  );
};
