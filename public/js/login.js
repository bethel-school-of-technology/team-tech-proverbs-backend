/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3004/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3004/api/v1/users/logout'
    });
    if (res.data.status = 'success') {
      showAlert('success', 'Logged out successfully');
      window.setTimeout(() => {
      location.assign('/').reload;
      }, 1000);
    }
  } catch (err) {
    console.log(err.response.data)
    showAlert('error', 'Error logging out, Try Again!');
  }
};
