import React, { useState, useEffect } from 'react';
import MemberService from '../services/MemberService';

const UpdateMember = ({ match }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    MemberService.getMemberById(match.params.id).then((response) => {
      setName(response.data.name);
    }).catch((error) => {
      console.error('There was an error retrieving the member data!', error);
    });
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedMember = { name };

    MemberService.updateMemberName(match.params.id, updatedMember).then(() => {
      alert('Member updated successfully!');
    }).catch((error) => {
      console.error('There was an error updating the member!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Update Member</button>
    </form>
  );
};

export default UpdateMember;