import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardOverview } from './dashboard/DashboardOverview';
import { DashboardEvents } from './dashboard/DashboardEvents';
import { DashboardPlanting } from './dashboard/DashboardPlanting';
import { DashboardFollowers } from './dashboard/DashboardFollowers';
import { DashboardAnalytics } from './dashboard/DashboardAnalytics';
import { DashboardLocations } from './dashboard/DashboardLocations';
import { DashboardReports } from './dashboard/DashboardReports';
import { DashboardSettings } from './dashboard/DashboardSettings';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation isScrolled={true} />
      
      <div className="pt-20 lg:pt-24">
        <div className="max-w-[2000px] mx-auto">
          <div className="flex">
            <DashboardSidebar />

            <main className="flex-1 p-6 lg:p-8">
              <DashboardHeader />
              
              <Routes>
                <Route index element={<DashboardOverview />} />
                <Route path="events" element={<DashboardEvents />} />
                <Route path="planting" element={<DashboardPlanting />} />
                <Route path="followers" element={<DashboardFollowers />} />
                <Route path="analytics" element={<DashboardAnalytics />} />
                <Route path="locations" element={<DashboardLocations />} />
                <Route path="reports" element={<DashboardReports />} />
                <Route path="settings" element={<DashboardSettings />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}