import { Li, Ul, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContact);

  return (
    <Ul>
      {contacts.map(({ name, number, id }) => (
        <Li key={id}>
          {name + ': ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(id))}
            >
              delete
            </Button>
          }
        </Li>
      ))}
    </Ul>
  );
};
