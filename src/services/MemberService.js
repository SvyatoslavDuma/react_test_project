import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/members';

const getAllMembers = () => {
  return axios.get(BASE_URL);
};

const createMember = (member) => {
  return axios.post(BASE_URL, member);
};

const updateMember = (id, member) => {
  return axios.patch(`${BASE_URL}/${id}`, member);  
};

const deleteMember = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const MemberService = {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
};

export default MemberService;
