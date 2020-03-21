export const API_BASE = 'https://covid-19.slj.me/api';

export function getGlobalToday() {
  return fetch(`${API_BASE}/global/today`, {
    method: 'GET',
    headers: {},
  }).then(res => {
    if (!res.ok) throw res.statusText;
    return res.json();
  });
}
