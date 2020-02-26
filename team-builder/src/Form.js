import React, { useState } from 'react';
import './App.css';

export const Form = props => {
  console.log(props)
  const [newMembers, setMembers] = useState({
    name: '',
    about: ''
  });

  const handleChanges = e => {
    setMembers({
      ...newMembers,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(newMembers);
    setMembers({ name: '', about: '' });
  };

  return (
    <div className='form'>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">New Member Name:{' '}</label>
        </div>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={newMembers.name}
        />
      </form>
      <form onSubmit={submitForm}>
        <label htmlFor='aboutMember'>About New Member:{' '} </label>
        <div>
          <textarea
            id="aboutMember"
            name="about"
            onChange={handleChanges}
            value={newMembers.about}
          />
        </div>
        <div className='submitBtn'>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </div>
  )
}
