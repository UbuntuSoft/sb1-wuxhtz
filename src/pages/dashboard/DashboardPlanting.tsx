import React from 'react';
import { TreePine, Map, Calendar, Users2, ArrowUpRight, Filter, Search, Plus } from 'lucide-react';

interface PlantingSite {
  id: number;
  name: string;
  location: string;
  treesPlanted: number;
  targetTrees: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'planned';
  volunteers: number;
  progress: number;
  image: string;
}

const plantingSites: PlantingSite[] = [
  {
    id: 1,
    name: "Karura Forest Restoration",
    location: "Karura Forest, Nairobi",
    treesPlanted: 25000,
    targetTrees: 50000,
    startDate: "2024-01-15",
    endDate: "2024-12-31",
    status: 'active',
    volunteers: 1200,
    progress: 50,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Ngong Hills Conservation",
    location: "Ngong Hills",
    treesPlanted: 15000,
    targetTrees: 30000,
    startDate: "2024-02-01",
    endDate: "2024-11-30",
    status: 'active',
    volunteers: 800,
    progress: 50,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Mt. Kenya Reforestation",
    location: "Mt. Kenya Region",
    treesPlanted: 45000,
    targetTrees: 45000,
    startDate: "2023-06-01",
    endDate: "2024-02-28",
    status: 'completed',
    volunteers: 2000,
    progress: 100,
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80"
  }
];

export function DashboardPlanting() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<TreePine className="h-6 w-6 text-green-600" />}
          label="Total Trees Planted"
          value="85,000"
          change="+12.5%"
        />
        <StatCard
          icon={<Map className="h-6 w-6 text-blue-600" />}
          label="Active Sites"
          value="2"
          change="+1"
        />
        <StatCard
          icon={<Users2 className="h-6 w-6 text-purple-600" />}
          label="Total Volunteers"
          value="4,000"
          change="+8.3%"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search planting sites..."
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
            <span>New Site</span>
          </button>
        </div>
      </div>

      {/* Planting Sites */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plantingSites.map((site) => (
          <PlantingSiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  change: string; 
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          {icon}
        </div>
        <div className="flex items-center text-green-600 dark:text-green-400">
          <span className="text-sm font-medium">{change}</span>
          <ArrowUpRight className="h-4 w-4 ml-1" />
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      </div>
    </div>
  );
}

function PlantingSiteCard({ site }: { site: PlantingSite }) {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    planned: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
      <div className="relative h-48">
        <img 
          src={site.image} 
          alt={site.name}
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${statusColors[site.status]}`}>
          {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {site.name}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Progress</span>
            <span className="text-gray-900 dark:text-white font-medium">{site.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${site.progress}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Trees Planted</span>
              <p className="text-gray-900 dark:text-white font-medium">{site.treesPlanted.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Target</span>
              <p className="text-gray-900 dark:text-white font-medium">{site.targetTrees.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Start Date</span>
              <p className="text-gray-900 dark:text-white font-medium">
                {new Date(site.startDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">End Date</span>
              <p className="text-gray-900 dark:text-white font-medium">
                {new Date(site.endDate).toLocaleDateString()}
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