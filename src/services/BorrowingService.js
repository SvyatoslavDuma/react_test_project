import axios from 'axios';

const API_URL = 'http://localhost:8080/api/borrow';

const borrowingService = {
  borrowBook: (memberId, bookId) => {
    return axios.post(`${API_URL}/borrow`, null, { params: { memberId, bookId } });
  },
  returnBook: (memberId, bookId) => {
    return axios.post(`${API_URL}/return`, null, { params: { memberId, bookId } });
  },
  getBooksBorrowedByMemberName: (name) => {
    return axios.get(`${API_URL}/members/${name}/borrowed-books`);
  },
  getDistinctBorrowedBookNames: () => {
    return axios.get(`${API_URL}/borrowed-books/distinct-names`);
  },
  getDistinctBorrowedBookNamesWithCount: () => {
    return axios.get(`${API_URL}/borrowed-books/distinct-names-with-count`);
  }
};

export default borrowingService;
