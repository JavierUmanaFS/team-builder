import React, { useState } from 'react';
import { Members } from './Members';
import { Form } from './Form';
import './App.css';

function App() {
  const [teamMembers, setMembers] = useState([
    {
      id: 1,
      name: 'steve',
      about: 'long walks on the beach'
    }
  ]);

  const addNewMember = member => {
    const newMembers = {
      id: Date.now(),
      name: member.name,
      about: member.about
    };
    setMembers([...teamMembers, newMembers])
  };


  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
