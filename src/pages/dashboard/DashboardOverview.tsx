import React from 'react';
import { DashboardStats } from '../../components/DashboardStats';
import { TreesChart } from '../../components/TreesChart';
import { RegionalMap } from '../../components/RegionalMap';
import { RecentActivities } from '../../components/RecentActivities';

export function DashboardOverview() {
  return (
    <div>
      <DashboardStats />

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Planting Progress</h3>
            <select className="text-sm border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
          </div>
          <TreesChart />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Regional Distribution</h3>
            <select className="text-sm border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>All Regions</option>
              <option>Nairobi</option>
              <option>Coast</option>
              <option>Rift Valley</option>
            </select>
          </div>
          <RegionalMap />
        </div>
      </div>

      <RecentActivities />
    </div>
  );
}