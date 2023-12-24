import ListItem from 'components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/actions';
import { selectFilteredContacts } from '../../redux/selectors';
import { List, Wrapper } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(removeContact(id));
  };

  const contacts = useSelector(selectFilteredContacts);

  return (
    <Wrapper>
      <h2>Contacts</h2>

      <List>
        {contacts?.map(contact => {
          return (
            <ListItem
              name={contact.name}
              phone={contact.number}
              id={contact.id}
              onDelete={onDelete}
              key={contact.id}
            />
          );
        })}
      </List>
    </Wrapper>
  );
};

export default ContactsList;
