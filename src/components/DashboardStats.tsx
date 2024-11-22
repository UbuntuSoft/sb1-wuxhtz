import React from 'react';
import { TreePine, Users2, ArrowUpRight, ArrowDownRight, Leaf, Cloud, Droplets } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatCard
        icon={<TreePine className="h-6 w-6 text-green-600" />}
        label="Total Trees Planted"
        value="1,234,567"
        change="+12.5%"
        positive={true}
      />
      <StatCard
        icon={<Users2 className="h-6 w-6 text-blue-600" />}
        label="Active Volunteers"
        value="50,432"
        change="+8.2%"
        positive={true}
      />
      <StatCard
        icon={<Cloud className="h-6 w-6 text-purple-600" />}
        label="Carbon Offset"
        value="2,345 tons"
        change="+15.3%"
        positive={true}
      />
      <StatCard
        icon={<Droplets className="h-6 w-6 text-cyan-600" />}
        label="Water Saved"
        value="1.2M liters"
        change="-2.4%"
        positive={false}
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

function StatCard({ icon, label, value, change, positive }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          {icon}
        </div>
        <div className={`flex items-center space-x-1 ${
          positive ? 'text-green-600' : 'text-red-600'
        }`}>
          <span className="text-sm font-medium">{change}</span>
          {positive ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
}