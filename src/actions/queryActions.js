
export const CHANGE_QUERY = 'CHANGE_QUERY';

export function changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    data: query,
  };
}
