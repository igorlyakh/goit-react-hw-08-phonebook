import AddContactForm from 'components/AddContactForm';
import ContactsList from 'components/ContactsList';
import FilterField from 'components/FilterField';
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
      <FilterField />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
