import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { createContact } from '../../redux/actions';
import { selectContacts } from '../../redux/selectors';
import {
  ErrorMessage,
  Field,
  Form,
  Label,
  Wrapper,
} from './AddContactForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required!'),
  number: Yup.string()
    .matches(
      new RegExp(/^\d{3}-\d{2}-\d{2}$/),
      'number number must be in the format "000-00-00"'
    )
    .required('Required!'),
});

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onNameSubmit = person => {
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === person.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${person.name} is already in contacts.`);
      return;
    }
    dispatch(createContact(person));
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onNameSubmit(values);
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Label>
            Name
            <Field name="name" placeholder="Alex" />
            <ErrorMessage name="name" component="span" />
          </Label>

          <Label>
            number
            <Field name="number" type="tel" placeholder="000-00-00" />
            <ErrorMessage name="number" component="span" />
          </Label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default AddContactForm;
