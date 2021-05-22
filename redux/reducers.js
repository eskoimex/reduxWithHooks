import {GET_RIDES} from './actions';

const initialState = {
  rides: [],
};

function ridesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RIDES:
      return {...state, rides: action.payload};
    default:
      return state;
  }
}

export default ridesReducer;
