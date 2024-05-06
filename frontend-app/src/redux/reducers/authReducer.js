const initialState = {
    user: null,
    accessToken: null,
    error: null, 
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          error: null, 
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          accessToken: null,
          error: null, 
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  