import { useDispatch, useSelector } from 'react-redux';
// proptype:
import PropTypes from 'prop-types'
// selector
import { selectTasks } from 'redux/contacts/selectors';
// operation:
import { addContact } from 'redux/contacts/operations';
// styles:
// import css from './ContactsForm.module.css';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectTasks);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.text.value;
    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (contactExists) {
      alert(`Homie "${inputValue}" already exists in your contact list!`);
      return;
    }
    dispatch(
      addContact({
        name: inputValue,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type name:  </label>
        <input
          type="text"
          name="text"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </div>
      <div>
      <label>Add number:  </label>
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits"
          required
        />
      </div>
      <button type="submit">make new contact</button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
