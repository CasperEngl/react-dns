import { CHANGE_QUERY } from '../actions/queryActions';

const initialState = {
  query: '',
};

export default function (state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case CHANGE_QUERY:
      return {
        ...state,
        query: data,
      };

    default:
      return state;
  }
}
