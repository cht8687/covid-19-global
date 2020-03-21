export const API_BASE = 'https://covid-19.slj.me/api';

export const getGlobalToday = async () =>
  await fetch(`${API_BASE}/global/today`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
