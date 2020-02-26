import React from 'react'
import './App.css';
export const Members = ({ teamMembers }) => {
  return (
    <div>
      {teamMembers.map(members => (
        <div className='memberEdit'>
          <h2>{members.name}</h2>
          <p>{members.about}</p>
          <button>x</button>
        </div>
      ))}
    </div>
  )
}
