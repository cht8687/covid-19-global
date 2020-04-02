export const API_BASE_V2 = 'https://corona.lmao.ninja/v2';

export const getHistoryAll = async () =>
  await fetch(`${API_BASE_V2}/historical/all`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
