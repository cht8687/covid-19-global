import france from './countryNameMaping/france';

export const mapOptionNameMapping = () => ({
  us: '美国',
  usa: '美国',
  australia: '澳大利亚',
  canada: '加拿大',
  france: '法国',
  china: '中国',
  uk: '英国',
});

export const mapOptionZoomlevelMapping = () => ({
  world: 1.5,
  usa: 1.1,
  australia: 2,
});

export const nameMappingWord = () => ({
  'United States': 'USA',
  Korea: 'S. Korea',
  'North Macedonia': 'Macedonia',
  'Bosnia and Herzegovina': 'Bosnia and Herz.',
  'United Kingdom': 'UK',
  Czechia: 'Czech Rep.',
  'S. Sudan': 'Sudan',
  'S. Sudan': 'S. Sudan',
  'Lao PDR': 'Laos',
  Macedonia: 'North Macedonia',
  'Bosnia and Herz.': 'Bosnia and Herzegovina',
  'Czech Rep.': 'Czechia',
  'Dominican Rep.': 'Dominican Republic',
  "Côte d'Ivoire": 'Ivory Coast',
  'Eq. Guinea': 'Equatorial Guinea',
  'Dem. Rep. Congo': 'DRC',
  'Central African Rep.': 'CAR',
});

export const nameMappingCountry = country => {
  switch (country) {
    case 'france':
      return france();
      break;
    case 'canada':
      break;
    case 'china':
      return china();
    case '':
      return uk();
    default:
  }
};
