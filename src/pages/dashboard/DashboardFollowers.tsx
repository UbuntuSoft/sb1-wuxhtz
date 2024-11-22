import React from 'react';
import { Search, Filter, Users2, TreePine, Calendar, MapPin } from 'lucide-react';

interface Follower {
  id: number;
  name: string;
  username: string;
  avatar: string;
  location: string;
  treesPlanted: number;
  eventsAttended: number;
  joinedDate: string;
  type: 'individual' | 'organization' | 'corporate';
  status: 'active' | 'inactive';
}

const followers: Follower[] = [
  {
    id: 1,
    name: "Sarah Kimani",
    username: "@sarahk",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    location: "Nairobi, Kenya",
    treesPlanted: 150,
    eventsAttended: 12,
    joinedDate: "2024-01-15",
    type: 'individual',
    status: 'active'
  },
  {
    id: 2,
    name: "Green Warriors Club",
    username: "@greenwarriors",
    avatar: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?auto=format&fit=crop&q=80",
    location: "Mombasa, Kenya",
    treesPlanted: 500,
    eventsAttended: 8,
    joinedDate: "2024-02-01",
    type: 'organization',
    status: 'active'
  },
  {
    id: 3,
    name: "Tech Corp Kenya",
    username: "@techcorp",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
    location: "Kisumu, Kenya",
    treesPlanted: 1000,
    eventsAttended: 15,
    joinedDate: "2024-01-20",
    type: 'corporate',
    status: 'active'
  }
];

export function DashboardFollowers() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Users2 className="h-6 w-6 text-blue-600" />}
          label="Total Followers"
          value="4,523"
        />
        <StatCard
          icon={<TreePine className="h-6 w-6 text-green-600" />}
          label="Trees Planted by Followers"
          value="25,431"
        />
        <StatCard
          icon={<Calendar className="h-6 w-6 text-purple-600" />}
          label="Events Attended"
          value="156"
        />
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search followers..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
            <option>All Types</option>
            <option>Individuals</option>
            <option>Organizations</option>
            <option>Corporates</option>
          </select>
        </div>
      </div>

      {/* Followers List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
        <div className="grid gap-6 p-6">
          {followers.map((follower) => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
}

function FollowerCard({ follower }: { follower: Follower }) {
  const typeColors = {
    individual: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    organization: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
    corporate: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
      <div className="flex items-center space-x-4">
        <img 
          src={follower.avatar} 
          alt={follower.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {follower.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{follower.username}</p>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${typeColors[follower.type]}`}>
            {follower.type.charAt(0).toUpperCase() + follower.type.slice(1)}
          </span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
          <MapPin className="h-5 w-5" />
          <span>{follower.location}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
          <TreePine className="h-5 w-5" />
          <span>{follower.treesPlanted} trees planted</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
          <Calendar className="h-5 w-5" />
          <span>{follower.eventsAttended} events attended</span>
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          View Profile
        </button>
        <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
          Message
        </button>
      </div>
    </div>
  );
}