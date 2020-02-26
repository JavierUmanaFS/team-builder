import React from 'react'

export const Members = ({ teamMembers }) => {
  return (
    <div>
      {teamMembers.map(members => (
        <div>
          <h2>{members.name}</h2>
          <p>{members.about}</p>
        </div>
      ))}
    </div>
  )
}
