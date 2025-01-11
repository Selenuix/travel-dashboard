import React from 'react';
import {Badge} from "@/components/ui/badge"

const MapLegend: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <Badge variant="outline" className="bg-[#10B981] text-white">Visited</Badge>
      <Badge variant="outline" className="bg-[#3B82F6] text-white">Lived</Badge>
      <Badge variant="outline" className="bg-[#F59E0B] text-white">Wishlist</Badge>
    </div>
  );
};

export default MapLegend;

