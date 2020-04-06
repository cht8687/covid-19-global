export const API_BASE_V1 = 'https://covid-19.slj.me/api';
export const API_BASE_V2 = 'https://covid-19.slj.me/api/v2';

export const getGlobalToday = async () =>
  await fetch(`${API_BASE_V1}/global/today`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export const getCountryToday = async ({country}) =>
  await fetch(`${API_BASE_V2}/latest/${country}`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export const getGlobalYesterday = async () =>
  await fetch(`${API_BASE_V1}/global/yesterday`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export const getUSAToday = async () =>
  await fetch(`${API_BASE_V2}/latest/us`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export const getAustraliaToday = async () =>
  await fetch(`${API_BASE_V2}/latest/Australia`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export const getCountryStateDaily = async (country, state) =>
  await fetch(`${API_BASE_V2}/daily/${country}/${state}`, {
    method: 'GET',
    headers: {},
  })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
