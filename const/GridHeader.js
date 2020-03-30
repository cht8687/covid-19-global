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
  total_recovered: 'Total Recovered',
  active_cases: 'Active Cases',
  new_cases: 'New Cases',
  serious_critical: 'Serious/Critical',
  new_deaths: 'New Deceased',
  new_active_cases: 'New Active',
  deaths_per_1m_pop: 'Death per 1M people',
  tot_cases_per_1m_pop: 'Cases per 1M people',
  new_recovered: 'New Recovered',
};
