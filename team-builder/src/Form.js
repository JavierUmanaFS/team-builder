import React, { useState } from 'react';
import './App.css';

export const Form = props => {
  console.log(props)
  const [newMembers, setMembers] = useState({
    title: '',
    body: ''
  })

  return (
    <div className='form'>
      <form>
        <div>
          <label htmlFor="name">New Member Name:{' '}</label>
        </div>
        <input
          id="name"
          type="text"
          name="title"
        />
      </form>
      <form>
        <label htmlFor='aboutMember'>About New Member:{' '} </label>
        <div>
          <textarea
            id="aboutMember"
            name="body"
          />
        </div>
        <div className='submitBtn'>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </div>
  )
}
