const initialState = {
    error: null,
  };
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default loginReducer;

