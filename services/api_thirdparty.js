export const API_BASE_V2 = 'https://corona.lmao.ninja/v2';

export const getHistoryAll = async location =>
  await fetch(`${API_BASE_V2}/historical/${location}`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
