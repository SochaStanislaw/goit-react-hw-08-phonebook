import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter';

import { Loader } from 'components/Loader/loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';
import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <p>Type data and click button to add a new contact to your list.</p>
      <ContactsForm></ContactsForm>
      <p>Can't find your contact? Type name below: </p>
      <ContactsFilter></ContactsFilter>
      <ContactsList />
      {isLoading && !error && <Loader />}
    </div>
  );
}
