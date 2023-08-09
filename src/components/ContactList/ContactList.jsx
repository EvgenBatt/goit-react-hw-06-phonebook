import PropTypes from 'prop-types';
import { Li, Ul, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/selectors';

export const ContactList = ({ deleteContacts }) => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContact);

  return (
    <Ul>
      {visibleContacts.map(({ name, number, id }) => (
        <Li key={id}>
          {name + ' : ' + number}
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

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
