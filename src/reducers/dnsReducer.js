import { GET_DNS } from '../actions/dnsActions';
import { RESET_DNS } from '../actions/dnsActions';

const initialState = {
  query: '',
  data: {
    ptr: '',
    soa: [],
    a: [],
    ns: [],
    cname: [],
    mx: [],
    txt: [],
    srv: [],
  },
};

export default function (state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_DNS:
      return {
        ...state,
        query: data.query,
        data,
      };
    case RESET_DNS:
      return {
        ...state,
        query: data,
        data: initialState.data,
      };

    default:
      return state;
  }
}
