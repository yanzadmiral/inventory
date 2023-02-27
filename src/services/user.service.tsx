import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://ec2-100-26-153-84.compute-1.amazonaws.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new UserService();