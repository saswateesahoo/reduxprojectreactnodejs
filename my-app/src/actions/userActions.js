export const registerUser = (email, password) => {
    return async (dispatch) => {
      try {
        // Simulate a successful registration for demonstration purposes.
        const response = { user: { email ,password }, message: 'Registration successful' };
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: response,
        });
      } catch (error) {
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  