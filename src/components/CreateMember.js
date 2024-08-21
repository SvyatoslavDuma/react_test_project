import React, { useState } from 'react';
import MemberService from '../services/MemberService';

const CreateMember = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMember = { name };

    MemberService.createMember(newMember).then(() => {
      alert('Member created successfully!');
      setName('');
    }).catch((error) => {
      console.error('There was an error creating the member!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Create Member</button>
    </form>
  );
};

export default CreateMember;