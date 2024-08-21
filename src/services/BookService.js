import axios from 'axios';

const API_URL = 'http://localhost:8080/api/books';

const bookService = {
  getAllBooks: () => {
    return axios.get(API_URL);
  },
  getBookById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },
  createBook: (bookData) => {
    return axios.post(`${API_URL}/create`, bookData);
  },
  updateBook: (id, bookData) => {
    return axios.put(`${API_URL}/${id}`, bookData);
  },
  deleteBook: (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
};

export default bookService;
