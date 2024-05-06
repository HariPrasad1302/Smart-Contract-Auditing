import axios from 'axios';

export const userLogin = (emailID, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8000/user/userlogin', { emailID, password });

      if (response.status !== 200) {
        throw new Error('Login failed');
      }

      const data = response.data;

      if (!data.error) {
        dispatch(loginSuccess(data.user, data.accessToken));
      } else {
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      console.error('Login error:', error.message);
      dispatch(loginFailure('Network error. Please try again later.'));
    }
  };
};

  
  export const loginSuccess = (user, accessToken) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: { user, accessToken },
    };
  };
  
  export const loginFailure = (errorMessage) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: errorMessage,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  