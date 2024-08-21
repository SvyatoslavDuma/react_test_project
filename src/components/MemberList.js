import React, { useState, useEffect } from 'react';
import MemberService from '../services/MemberService';

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [editingMemberId, setEditingMemberId] = useState(null);
  const [newMemberName, setNewMemberName] = useState('');  
  const [editMemberName, setEditMemberName] = useState(''); 

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = () => {
    MemberService.getAllMembers().then((response) => {
      setMembers(response.data);
    }).catch((error) => {
      console.error('Error fetching members:', error);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMember = { name: newMemberName };

    MemberService.createMember(newMember).then(() => {
      alert('Member added successfully!');
      setNewMemberName('');
      loadMembers();  
    }).catch((error) => {
      console.error('There was an error adding the member!', error);
    });
  };

  const startEditing = (member) => {
    setEditingMemberId(member.id);
    setEditMemberName(member.name);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const updatedMember = { name: editMemberName };

    MemberService.updateMember(editingMemberId, updatedMember).then(() => {
      alert('Member updated successfully!');
      setEditingMemberId(null);
      setEditMemberName('');
      loadMembers();  
    }).catch((error) => {
      console.error('There was an error updating the member!', error);
    });
  };

  const deleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      MemberService.deleteMember(id).then(() => {
        alert('Member deleted successfully!');
        loadMembers();  
      }).catch((error) => {
        console.error('There was an error deleting the member!', error);
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Member List</h2>
      <ul className="list-group mb-4">
        {members.map((member) => (
          <li key={member.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editingMemberId === member.id ? (
              <form onSubmit={handleEditSubmit} className="w-100">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editMemberName}
                    onChange={(e) => setEditMemberName(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Save</button>
                <button onClick={() => setEditingMemberId(null)} className="btn btn-secondary btn-sm ml-2">Cancel</button>
              </form>
            ) : (
              <>
                <div>
                  <strong>{member.name}</strong> (Joined: {new Date(member.membershipDate).toLocaleDateString()})
                </div>
                <div>
                  <button onClick={() => startEditing(member)} className="btn btn-warning btn-sm mr-2">Edit</button>
                  <button onClick={() => deleteMember(member.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      
      <h3>Add a New Member</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            required
            disabled={editingMemberId !== null}  
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={editingMemberId !== null}>
          Add Member
        </button>
      </form>
    </div>
  );
};

export default MemberList;
