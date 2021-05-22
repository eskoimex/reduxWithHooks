import axios from 'axios';

export const GET_RIDES = 'FETCH_RIDES';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const getRides = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}`);
      if (res.data) {
        dispatch({
          type: GET_RIDES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error)
  }
};

