import React from 'react';
import { Calendar, Download, Filter, TreePine, Users2, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const metrics: MetricCard[] = [
  {
    title: 'Trees Planted (Monthly)',
    value: '12,543',
    change: '+12.5%',
    trend: 'up',
    icon: <TreePine className="h-6 w-6 text-green-600" />
  },
  {
    title: 'Volunteer Engagement',
    value: '2,123',
    change: '+8.2%',
    trend: 'up',
    icon: <Users2 className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Goal Completion',
    value: '78.5%',
    change: '+5.1%',
    trend: 'up',
    icon: <Target className="h-6 w-6 text-purple-600" />
  }
];

export function DashboardAnalytics() {
  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Download className="h-5 w-5" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Monthly Planting Progress
            </h3>
            <select className="text-sm border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>All Regions</option>
              <option>Nairobi</option>
              <option>Coast</option>
              <option>Rift Valley</option>
            </select>
          </div>
          <div className="h-[300px] flex items-end space-x-2">
            {[65, 45, 75, 50, 85, 70, 90, 55, 45, 60, 75, 80].map((height, index) => (
              <div key={index} className="flex-1 group">
                <div 
                  className="bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition rounded-t"
                  style={{ height: `${height}%` }}
                >
                  <div 
                    className="bg-green-500 dark:bg-green-400 group-hover:bg-green-600 dark:group-hover:bg-green-500 transition rounded-t h-full"
                    style={{ opacity: height / 100 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Volunteer Participation
            </h3>
            <select className="text-sm border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Corporate', value: 45, color: 'bg-blue-500' },
              { label: 'Community Groups', value: 30, color: 'bg-green-500' },
              { label: 'Schools', value: 15, color: 'bg-purple-500' },
              { label: 'Individual', value: 10, color: 'bg-orange-500' }
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
            View All
          </button>
        </div>
        <div className="space-y-6">
          {[
            {
              title: 'Corporate Planting Event',
              description: 'Tech Corp planted 500 trees in Karura Forest',
              date: '2 hours ago',
              icon: <TreePine className="h-5 w-5 text-green-600" />
            },
            {
              title: 'New Team Joined',
              description: 'Safaricom Green Warriors joined the platform',
              date: '5 hours ago',
              icon: <Users2 className="h-5 w-5 text-blue-600" />
            },
            {
              title: 'Goal Achievement',
              description: 'Monthly planting target exceeded by 15%',
              date: '1 day ago',
              icon: <Target className="h-5 w-5 text-purple-600" />
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, trend, icon }: MetricCard) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          {icon}
        </div>
        <div className={`flex items-center ${
          trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          <span className="text-sm font-medium">{change}</span>
          {trend === 'up' ? (
            <ArrowUpRight className="h-4 w-4 ml-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 ml-1" />
          )}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
      </div>
    </div>
  );
}