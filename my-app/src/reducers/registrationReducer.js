const initialState = {
    error: null,
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return { ...state, error: null };
      case 'REGISTER_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  

