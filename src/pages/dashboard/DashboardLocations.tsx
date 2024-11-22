import React from 'react';
import { Map, Search, Filter, Plus, TreePine, Users2, Calendar } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  region: string;
  area: string;
  treesPlanted: number;
  targetTrees: number;
  volunteers: number;
  nextEvent: string;
  status: 'active' | 'planned' | 'completed';
  coordinates: string;
  image: string;
  progress: number;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Karura Forest",
    region: "Nairobi",
    area: "1,041 hectares",
    treesPlanted: 25000,
    targetTrees: 50000,
    volunteers: 1200,
    nextEvent: "2024-03-20",
    status: 'active',
    coordinates: "-1.2333, 36.8167",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
    progress: 50
  },
  {
    id: 2,
    name: "Ngong Hills",
    region: "Kajiado",
    area: "521 hectares",
    treesPlanted: 15000,
    targetTrees: 30000,
    volunteers: 800,
    nextEvent: "2024-03-25",
    status: 'active',
    coordinates: "-1.4000, 36.6333",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80",
    progress: 50
  },
  {
    id: 3,
    name: "Mt. Kenya Forest",
    region: "Nyeri",
    area: "2,000 hectares",
    treesPlanted: 45000,
    targetTrees: 45000,
    volunteers: 2000,
    nextEvent: "Completed",
    status: 'completed',
    coordinates: "-0.1500, 37.3000",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80",
    progress: 100
  }
];

export function DashboardLocations() {
  return (
    <div className="space-y-6">
      {/* Map Placeholder */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Planting Locations Map
          </h3>
          <select className="text-sm border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option>All Regions</option>
            <option>Nairobi</option>
            <option>Coast</option>
            <option>Rift Valley</option>
          </select>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 h-[400px] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Map className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Interactive map coming soon</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search locations..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus className="h-5 w-5" />
            <span>Add Location</span>
          </button>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}

function LocationCard({ location }: { location: Location }) {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    completed: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
      <div className="relative h-48">
        <img 
          src={location.image} 
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${statusColors[location.status]}`}>
          {location.status.charAt(0).toUpperCase() + location.status.slice(1)}
        </span>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {location.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {location.region} • {location.area}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">Planting Progress</span>
              <span className="text-gray-900 dark:text-white font-medium">{location.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${location.progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <TreePine className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  {location.treesPlanted.toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Trees Planted</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users2 className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  {location.volunteers.toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Volunteers</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-gray-900 dark:text-white font-medium">Next Event</p>
              <p className="text-gray-600 dark:text-gray-400">
                {location.nextEvent === 'Completed' 
                  ? 'No upcoming events' 
                  : new Date(location.nextEvent).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}