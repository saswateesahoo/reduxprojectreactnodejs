import axios from 'axios';

export const registerUser = (username, password, role_id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'REGISTER_REQUEST',
      });
      const response = await axios.post('http://localhost:3333/api/auth/signup', {
        username,
        password,
        role_id,
      });
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: error.response.data.message, 
      });
    }
  };
};
