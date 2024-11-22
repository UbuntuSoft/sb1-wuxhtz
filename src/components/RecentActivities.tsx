import React from 'react';
import { TreePine, Users2, Calendar, MapPin } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'planting',
    title: 'Corporate Planting Event',
    description: 'Tech Corp planted 500 trees in Karura Forest',
    date: '2 hours ago',
    icon: <TreePine className="h-5 w-5 text-green-600" />,
  },
  {
    id: 2,
    type: 'team',
    title: 'New Team Joined',
    description: 'Safaricom Green Warriors joined the platform',
    date: '5 hours ago',
    icon: <Users2 className="h-5 w-5 text-blue-600" />,
  },
  {
    id: 3,
    type: 'event',
    title: 'Upcoming Event',
    description: 'Community planting day scheduled in Ngong Hills',
    date: 'Tomorrow',
    icon: <Calendar className="h-5 w-5 text-purple-600" />,
  },
  {
    id: 4,
    type: 'location',
    title: 'New Planting Site',
    description: 'Added Machakos County as new planting location',
    date: '1 day ago',
    icon: <MapPin className="h-5 w-5 text-red-600" />,
  },
];

export function RecentActivities() {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
        <button className="text-sm text-green-600 hover:text-green-700">View All</button>
      </div>
      
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              {activity.icon}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}