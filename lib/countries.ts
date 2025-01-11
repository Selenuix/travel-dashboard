export type CountryStatus = 'lived' | 'visited' | 'wishlist' | 'none';

export interface Country {
  name: string;
  code: string;
  region: string;
  subregion: string;
  status: CountryStatus;
  type: 'country' | 'territory' | 'disputed';
}

export const countries: Country[] = [
  {
    name: 'United States',
    code: 'USA',
    region: 'North America',
    subregion: 'Northern America',
    status: 'none',
    type: 'country'
  },
  {
    name: 'Canada',
    code: 'CAN',
    region: 'North America',
    subregion: 'Northern America',
    status: 'none',
    type: 'country'
  },
  {name: 'Mexico', code: 'MEX', region: 'North America', subregion: 'Central America', status: 'none', type: 'country'},
  {name: 'Brazil', code: 'BRA', region: 'South America', subregion: 'South America', status: 'none', type: 'country'},
  {name: 'France', code: 'FRA', region: 'Europe', subregion: 'Western Europe', status: 'none', type: 'country'},
  {name: 'Germany', code: 'DEU', region: 'Europe', subregion: 'Western Europe', status: 'none', type: 'country'},
  {name: 'Nigeria', code: 'NGA', region: 'Africa', subregion: 'Western Africa', status: 'none', type: 'country'},
  {name: 'India', code: 'IND', region: 'Asia', subregion: 'Southern Asia', status: 'none', type: 'country'},
  {name: 'China', code: 'CHN', region: 'Asia', subregion: 'Eastern Asia', status: 'none', type: 'country'},
  {
    name: 'Australia',
    code: 'AUS',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    status: 'none',
    type: 'country'
  },
  // Add more countries here...
];

export const regions = [
  'Europe', 'Africa', 'Middle East', 'North America', 'Central America',
  'South America', 'Oceania', 'East and South East Asia', 'Central Asia', 'South Asia'
];

