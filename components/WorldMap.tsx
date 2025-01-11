'use client'

import React from 'react';
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';
import {useTheme} from 'next-themes';
import {useTravelContext} from '@/contexts/TravelContext';
import {Country} from "@/lib/countries";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap: React.FC = () => {
  const {theme} = useTheme();
  const {countries} = useTravelContext();

  const getCountryColor = (country: Country | undefined, isDarkTheme: boolean) => {
    if (!country) return isDarkTheme ? "#2A2A2A" : "#D6D6DA";
    switch (country.status) {
      case 'visited':
        return "#10B981"; // Green color for visited countries
      case 'lived':
        return "#3B82F6"; // Blue color for countries lived in
      case 'wishlist':
        return "#F59E0B"; // Amber color for wishlist countries
      default:
        return isDarkTheme ? "#2A2A2A" : "#D6D6DA";
    }
  };

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Geographies geography={geoUrl}>
        {({geographies}) =>
          geographies.map((geo) => {
            const country = countries.find(c => c.code === geo.properties.iso_a3);
            const isDarkTheme = theme === 'dark';
            const fill = getCountryColor(country, isDarkTheme);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fill}
                stroke={isDarkTheme ? "#3F3F46" : "#FFFFFF"}
                strokeWidth={0.5}
                style={{
                  default: {outline: 'none'},
                  hover: {outline: 'none', fill: "#6366F1"},
                  pressed: {outline: 'none'},
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;
