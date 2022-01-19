import  { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { LabelWrap,FormWrap, ButtonWrap } from './ContactForm.styled';


export default function ContactForm () {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  } 
  const handleSubmit = (event) => {
    event.preventDefault();

  }
  return (
    <>        
      <FormWrap onSubmit={handleSubmit}>
        <LabelWrap>
          Name
          <input
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </LabelWrap>
          <LabelWrap>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </LabelWrap>
        <ButtonWrap type="submit">Add contact</ButtonWrap>
      </FormWrap>
    </>
  )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
