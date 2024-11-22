import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TreePine, 
  Users2, 
  BarChart3, 
  Map, 
  Calendar, 
  FileText, 
  Settings,
  LogOut,
  PlusCircle
} from 'lucide-react';

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 min-h-screen">
      <div className="p-6">
        <nav className="space-y-1">
          <SidebarLink 
            to="/dashboard" 
            icon={<LayoutDashboard className="h-5 w-5" />} 
            label="Overview" 
            active={location.pathname === '/dashboard'} 
          />
          <SidebarLink 
            to="/dashboard/events" 
            icon={<Calendar className="h-5 w-5" />} 
            label="Events" 
            active={location.pathname === '/dashboard/events'} 
          />
          <SidebarLink 
            to="/dashboard/planting" 
            icon={<TreePine className="h-5 w-5" />} 
            label="Tree Planting" 
            active={location.pathname === '/dashboard/planting'} 
          />
          <SidebarLink 
            to="/dashboard/followers" 
            icon={<Users2 className="h-5 w-5" />} 
            label="Followers" 
            active={location.pathname === '/dashboard/followers'} 
          />
          <SidebarLink 
            to="/dashboard/analytics" 
            icon={<BarChart3 className="h-5 w-5" />} 
            label="Analytics" 
            active={location.pathname === '/dashboard/analytics'} 
          />
          <SidebarLink 
            to="/dashboard/locations" 
            icon={<Map className="h-5 w-5" />} 
            label="Locations" 
            active={location.pathname === '/dashboard/locations'} 
          />
          <SidebarLink 
            to="/dashboard/reports" 
            icon={<FileText className="h-5 w-5" />} 
            label="Reports" 
            active={location.pathname === '/dashboard/reports'} 
          />
          
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800">
            <SidebarLink 
              to="/dashboard/settings" 
              icon={<Settings className="h-5 w-5" />} 
              label="Settings" 
              active={location.pathname === '/dashboard/settings'} 
            />
            <SidebarLink 
              to="/logout" 
              icon={<LogOut className="h-5 w-5" />} 
              label="Log Out" 
            />
          </div>
        </nav>

        <div className="mt-8">
          <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            <PlusCircle className="h-5 w-5" />
            <span>Create Event</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarLink({ to, icon, label, active }: SidebarLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
        active 
          ? 'bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}