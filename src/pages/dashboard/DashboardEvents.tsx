import React from 'react';
import { Calendar, MapPin, Users2, Plus, Filter, Search } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  type: 'corporate' | 'community' | 'school';
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Tech Corp Green Initiative",
    date: "2024-03-20",
    location: "Karura Forest, Nairobi",
    participants: 500,
    status: 'upcoming',
    type: 'corporate',
    image: "https://images.unsplash.com/photo-1552084117-56a987666449?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Community Planting Day",
    date: "2024-03-25",
    location: "Ngong Hills",
    participants: 200,
    status: 'upcoming',
    type: 'community',
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Schools Environmental Program",
    date: "2024-03-15",
    location: "Multiple Schools, Nairobi",
    participants: 1000,
    status: 'completed',
    type: 'school',
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80"
  }
];

export function DashboardEvents() {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
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
            <span>New Event</span>
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    ongoing: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    completed: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300'
  };

  const typeColors = {
    corporate: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
    community: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    school: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
      <div className="relative h-48">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[event.status]}`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[event.type]}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {event.title}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="h-5 w-5 mr-3" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="h-5 w-5 mr-3" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users2 className="h-5 w-5 mr-3" />
            <span>{event.participants} participants</span>
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