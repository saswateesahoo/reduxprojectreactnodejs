// const initialState = {
//     error: null,
//   };
  
//   const registrationReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'REGISTER_SUCCESS':
//         return { ...state, error: null };
//       case 'REGISTER_FAILURE':
//         return { ...state, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default registrationReducer;
  

const initialState = {
  REGISTRATION_RESPONSE: null,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return { ...state, REGISTRATION_RESPONSE: null };
    case 'REGISTER_FAILURE':
      return { ...state, REGISTRATION_RESPONSE: action.payload };
    default:
      return state;
  }
};

export default registrationReducer;
