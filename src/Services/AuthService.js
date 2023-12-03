import axios from 'axios';

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5000/login/find', {
        email: credentials.email,
        password: credentials.password,
      });
      
      if (response.data.token) {
        sessionStorage.setItem('token', response.data.token);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  logout: () => {
    sessionStorage.removeItem('token');
  },

  isAuthenticated: () => {
    return sessionStorage.getItem('token') !== null;
  },

  getCurrentUser: async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return null;
    }    
  },


};

export default AuthService;
