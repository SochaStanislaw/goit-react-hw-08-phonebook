import { useDispatch, useSelector } from 'react-redux';
// proptypes:
import PropTypes from 'prop-types';
// nanoid:
import { nanoid } from 'nanoid';
// slice:
import { setFilter } from 'redux/contacts/filterSlice';
// selector:
import { selectStatusFilter } from 'redux/contacts/selectors';
// styles:
// import css from './ContactsFilter.module.css'

const filterId = nanoid();

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor={filterId}>type name of person u lookin' for:</label>
      <input
        id={filterId}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from 'redux/filterSlice';

// export const FilterContact = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector((state) => state.filter);

//   const handleChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <label>
//       type name of person u lookin' for:
//       <input 
//         type="text"
//         value={filter}
//         onChange={handleChange} 
//       />
//     </label>
//   );
// };

// FilterContact.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };