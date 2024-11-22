import React from 'react';
import { Calendar, ChevronRight, MapPin, Users2 } from 'lucide-react';

interface Event {
  type: 'Corporate' | 'Community' | 'Organization';
  title: string;
  date: string;
  location: string;
  participants: string;
  image: string;
  color: string;
}

const events: Event[] = [
  {
    type: 'Corporate',
    title: 'Tech Giants Green Initiative',
    date: 'March 15, 2024',
    location: 'Karura Forest, Nairobi',
    participants: '500 participants',
    image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&q=80',
    color: 'bg-blue-500'
  },
  {
    type: 'Community',
    title: 'Weekend Warriors Planting Day',
    date: 'March 20, 2024',
    location: 'Ngong Hills',
    participants: '200 participants',
    image: 'https://images.unsplash.com/photo-1552799446-159ba9523315?auto=format&fit=crop&q=80',
    color: 'bg-green-500'
  },
  {
    type: 'Organization',
    title: 'Schools Environmental Day',
    date: 'March 25, 2024',
    location: 'Multiple Schools, Nairobi',
    participants: '1000+ students',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80',
    color: 'bg-purple-500'
  }
];

export function Events() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Join our community events and make a direct impact on Kenya's environment.
            </p>
          </div>
          <button className="text-primary-600 hover:text-primary-700 flex items-center text-lg font-medium">
            View All Events <ChevronRight className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={event.title} className="section-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover-card">
      <div className="relative h-56">
        <img 
          src={event.image}
          alt={`${event.type} Event`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 ${event.color} text-white px-4 py-1.5 rounded-full text-sm font-medium`}>
          {event.type}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition mb-4">
          {event.title}
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-3 text-primary-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-3 text-primary-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users2 className="h-5 w-5 mr-3 text-primary-500" />
            <span>{event.participants}</span>
          </div>
        </div>
        <button className="w-full bg-primary-50 text-primary-600 py-3 rounded-lg font-medium hover:bg-primary-100 transition">
          Register Now
        </button>
      </div>
    </div>
  );
}