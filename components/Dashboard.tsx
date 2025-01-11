'use client'

import {FC} from 'react';
import Link from 'next/link';
import {useTravelContext} from '@/contexts/TravelContext';
import WorldMap from './WorldMap';
import MapLegend from './MapLegend';
import Statistics from './Statistics';
import CountryList from './CountryList';
import {regions} from '@/lib/countries';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"

const Dashboard: FC = () => {
  const {countries} = useTravelContext();

  return (<div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-6">Travel Dashboard</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>World Map</CardTitle>
          <CardDescription>Your travel experiences visualized</CardDescription>
        </CardHeader>
        <CardContent>
          <WorldMap/>
          <MapLegend/>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Statistics countries={countries}/>
        <Card>
          <CardHeader>
            <CardTitle>Regions</CardTitle>
            <CardDescription>Explore travel statistics by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {regions.map(region => (<Button key={region} variant="outline" asChild>
                <Link href={`/region/${encodeURIComponent(region)}`}>
                  {region}
                </Link>
              </Button>))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Countries</CardTitle>
        <CardDescription>Manage your travel status for each country</CardDescription>
      </CardHeader>
      <CardContent>
        <CountryList countries={countries}/>
      </CardContent>
    </Card>
  </div>);
};

export default Dashboard;

