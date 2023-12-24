import AddContactForm from 'components/AddContactForm';
import ContactsList from 'components/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/actions';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <AddContactForm />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
