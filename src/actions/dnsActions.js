/*
eslint

no-restricted-syntax: 0,
no-multi-spaces: 0,
camelcase: 0,
quotes: 0,
func-names: 0,
*/

export const GET_DNS = 'GET_DNS';
export const RESET_DNS = 'RESET_DNS';

export function getDNS(query) {
  return async function (dispatch) {
    setTimeout(async () => {
      try {
        const result = await fetch(`https://support.wkt.dk/public/dns.php?domain=${query}`);
        const dns = await result.json();

        return dispatch({
          type: GET_DNS,
          data: dns,
        });
      } catch (e) {
        // console.log(e);
      }
    }, 500);
  };
}

export function resetDNS(query) {
  return {
    type: RESET_DNS,
    data: query,
  };
}
