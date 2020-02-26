import React, { useState } from 'react';
import { Members } from './Members';
import { Form } from './Form';
import './App.css';

function App() {
  const [teamMembers, setMembers] = useState([
    {
      name: 'steve',
      about: 'long walks on the beach'
    }
  ]);

  return (
    <div className="App">
      <Form teamMembers={teamMembers} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
