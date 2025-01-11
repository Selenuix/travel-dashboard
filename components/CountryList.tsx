'use client'

import {useTravelContext} from '@/contexts/TravelContext';
import {Country, CountryStatus} from '@/lib/countries';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Badge} from "@/components/ui/badge"
import {FC} from "react";

interface CountryListProps {
  countries: Country[];
}

const CountryList: FC<CountryListProps> = ({countries}) => {
  const {updateCountryStatus} = useTravelContext();

  const handleStatusChange = (country: Country, status: CountryStatus) => {
    updateCountryStatus(country.code, status);
  };

  const sortedCountries = [...countries].sort((a, b) => {
    if (a.status === 'visited' && b.status !== 'visited') return -1;
    if (a.status !== 'visited' && b.status === 'visited') return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Country</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedCountries.map(country => (
          <TableRow key={country.code}>
            <TableCell className="font-medium">{country.name}</TableCell>
            <TableCell>{country.region}</TableCell>
            <TableCell>
              <Badge
                variant={country.type === 'country' ? 'default' : country.type === 'territory' ? 'secondary' : 'outline'}>
                {country.type}
              </Badge>
            </TableCell>
            <TableCell>
              <Select
                value={country.status}
                onValueChange={(value) => handleStatusChange(country, value as CountryStatus)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select status"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Not visited</SelectItem>
                  <SelectItem value="visited">Visited</SelectItem>
                  <SelectItem value="lived">Lived</SelectItem>
                  <SelectItem value="wishlist">Wishlist</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CountryList;

