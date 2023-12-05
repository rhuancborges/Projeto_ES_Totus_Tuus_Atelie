import api from './api';

class UserData {
  authenticate(data) {
    return api.post('/login', data);
  }
}

export default new UserData();