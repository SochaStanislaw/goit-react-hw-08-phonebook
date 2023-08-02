import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// proptypes:
import PropTypes from 'prop-types';
// operation:
import { deleteContact } from 'redux/contacts/operations';
// selector:
import { selectTasks } from 'redux/contacts/selectors';
import { selectStatusFilter } from 'redux/contacts/selectors';
// styles:
// import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectTasks);
  const filter = useSelector(selectStatusFilter).toLowerCase();
  const dataNormalize = filter.toLowerCase();
  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(dataNormalize)
  );
  const dispatch = useDispatch();

  return (
    <div>
      <p>Your contact list:</p>
      <ul>
        {normalizedContacts.map(contact => (
          <li key={contact.id}>
              <p>name: {contact.name} | number: {contact.number}</p>
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsList;

