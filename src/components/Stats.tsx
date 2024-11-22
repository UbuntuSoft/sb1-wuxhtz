import React from 'react';
import { Users, TreePine, Building2 } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-900 to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587920149371-ac728d70e0e3?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={<Users className="h-12 w-12 text-primary-300 mb-4" />} value="50K+" label="Individual Contributors" />
          <StatCard icon={<TreePine className="h-12 w-12 text-primary-300 mb-4" />} value="1M+" label="Trees Planted" />
          <StatCard icon={<Building2 className="h-12 w-12 text-primary-300 mb-4" />} value="200+" label="Corporate Partners" />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="glass-card rounded-xl p-8 text-white hover-card border border-white/10">
      {icon}
      <h3 className="text-4xl font-bold mb-2">{value}</h3>
      <p className="text-primary-100">{label}</p>
    </div>
  );
}