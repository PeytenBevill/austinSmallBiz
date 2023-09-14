import { combineReducers } from 'redux';

// const bizInfo = (state = []) => state;

const bizInfo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return [...state, action.value];
    case 'DELETE_LISTING':
      return state.filter((listing) => listing.bizName !== action.value);
    default:
      return state;
  }
};

export default combineReducers({ bizInfo });
