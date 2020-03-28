export const GRID_HEADER = [
  'Country(Region)',
  'Confirmed',
  'New Cases',
  'Deceased',
  'New Deceased',
  'Recovered',
  'Active',
  'Critical',
  'Total Per/1m Population',
  'Total Deceased Per/1m Population',
];

export const SNAKE_TO_NORMAL = {
  country_region: 'State',
  province_state: 'State',
  total_cases: 'Confirmed',
  total_deaths: 'Total Deceased',
  active_cases: 'Active Cases',
  recovered: 'Recovered',
  new_cases: 'New Cases',
  new_deaths: 'New Deceased',
  new_active_cases: 'New Active',
  new_recovered: 'New Recovered',
};
