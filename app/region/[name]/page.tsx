'use client'

import React from 'react';
import {useParams} from 'next/navigation';
import {useTravelContext} from '@/contexts/TravelContext';
import WorldMap from '@/components/WorldMap';
import MapLegend from '@/components/MapLegend';
import Statistics from '@/components/Statistics';
import CountryList from '@/components/CountryList';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import Link from 'next/link';

const RegionPage: React.FC = () => {
  let {name} = useParams();

  if (typeof name === "string") {
    name = decodeURIComponent(name)
  }
  const {countries} = useTravelContext();

  const regionCountries = countries.filter(country => country.region === name);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">{name} Dashboard</h1>
        <Button asChild>
          <Link href="/">Back to World</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{name} Map</CardTitle>
            <CardDescription>Your travel experiences in {name}</CardDescription>
          </CardHeader>
          <CardContent>
            <WorldMap/>
            <MapLegend/>
          </CardContent>
        </Card>
        <Statistics countries={regionCountries}/>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Countries in {name}</CardTitle>
          <CardDescription>Manage your travel status for countries in {name}</CardDescription>
        </CardHeader>
        <CardContent>
          <CountryList countries={regionCountries}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegionPage;

