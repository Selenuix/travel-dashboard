'use client'

import {Country, regions} from '@/lib/countries';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Progress} from "@/components/ui/progress"
import {FC} from "react";

interface StatisticsProps {
  countries: Country[];
}

const Statistics: FC<StatisticsProps> = ({countries}) => {
  const visitedCountries: Country[] = countries.filter(c => c.status === 'visited' || c.status === 'lived');
  const livedCountries: Country[] = countries.filter(c => c.status === 'lived');
  const visitedRegions = new Set(visitedCountries.map(c => c.region));
  const livedRegions = new Set(livedCountries.map(c => c.region));

  const percentageVisited: number = (visitedCountries.length / countries.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
        <CardDescription>Your travel achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Countries visited</span>
              <span className="text-sm font-medium">{visitedCountries.length} / {countries.length}</span>
            </div>
            <Progress value={percentageVisited}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Percentage of world visited</p>
              <p className="text-2xl font-bold">{percentageVisited.toFixed(2)}%</p>
            </div>
            <div>
              <p className="text-sm font-medium">Regions visited</p>
              <p className="text-2xl font-bold">{visitedRegions.size} / {regions.length}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Countries lived in</p>
              <p className="text-2xl font-bold">{livedCountries.length}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Regions lived in</p>
              <p className="text-2xl font-bold">{livedRegions.size}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Statistics;

