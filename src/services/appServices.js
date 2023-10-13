import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const loginService = async (data) => {
  const response = await axios.post(VITE_API_URL + 'login', data);
  return response.data;
};

const fetchUsernameService = async () => {
  const TOKEN_VALUE = localStorage.getItem('TOKEN_VALUE');
  const response = await axios.get(VITE_API_URL + 'username', {
    headers: {
      Authorization: 'Bearer ' + TOKEN_VALUE,
    },
  });

  return response.data;
};

const logoutService = async () => {
  const TOKEN_VALUE = localStorage.getItem('TOKEN_VALUE');
  const response = await axios.post(VITE_API_URL + 'logout', null, {
    headers: {
      authorization: 'Bearer ' + TOKEN_VALUE,
    },
  });

  return response.data;
};

const fetchFlightsService = async (pageParam) => {
  const TOKEN_VALUE = localStorage.getItem('TOKEN_VALUE');
  const response = await axios.get(VITE_API_URL + 'list', {
    headers: {
      Authorization: 'Bearer ' + TOKEN_VALUE,
    },
    params: {
      page: pageParam,
      size: 3,
    },
  });

  return response.data;
};

export {
  loginService,
  logoutService,
  fetchUsernameService,
  fetchFlightsService,
};
