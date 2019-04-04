import { GET_USER } from './types';
import axios from 'axios';

export const fetchUsers = (property = 'id') => async dispatch => {
  const response = await axios.get('http://demo9197058.mockable.io/users');
  if (property === 'id' || property === 'zip' || property === 'age') {
    response.data.sort((a, b) => a[property] - b[property]);
  } else {
    response.data.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      return 1;
    });
  }

  dispatch({
    type: GET_USER,
    payload: response.data
  });
};
