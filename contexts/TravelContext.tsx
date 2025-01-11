'use client'

import {createContext, FC, ReactNode, useContext, useState} from 'react';
import {Country, CountryStatus, countries as initialCountries} from '../lib/countries';

interface TravelContextType {
  countries: Country[];
  updateCountryStatus: (code: string, status: CountryStatus) => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [countries, setCountries] = useState(initialCountries);

  const updateCountryStatus = (code: string, status: CountryStatus) => {
    setCountries(prevCountries =>
      prevCountries.map(country =>
        country.code === code ? {...country, status} : country
      )
    );
  };

  return (
    <TravelContext.Provider value={{countries, updateCountryStatus}}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (context === undefined) {
    throw new Error('useTravelContext must be used within a TravelProvider');
  }
  return context;
};

