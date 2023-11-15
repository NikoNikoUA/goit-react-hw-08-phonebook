import { BtnDeleteItem, ListItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from '../../../src/redux/operations';

Notify.init({
  borderRadius: '11px',
  position: 'top-right',
  width: '400px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

export const ContactListItem = ({ name, number, contactId }) => {
  const dispatch = useDispatch();

  const onRemoveContact = () => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => Notify.success('The contact has been successfully removed'))
      .catch(error => error.message);
  };

  return (
    <ListItem key={contactId}>
      {name}: {number}
      <BtnDeleteItem onClick={() => onRemoveContact(contactId)}>
        Remove
      </BtnDeleteItem>
    </ListItem>
  );
};
