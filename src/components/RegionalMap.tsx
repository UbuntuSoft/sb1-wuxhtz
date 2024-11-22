import React from 'react';

export function RegionalMap() {
  return (
    <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-2">Interactive Map Coming Soon</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between px-4">
              <span className="text-sm text-gray-600">Nairobi Region</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-900">75%</span>
            </div>
            <div className="flex items-center justify-between px-4">
              <span className="text-sm text-gray-600">Coast Region</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-900">60%</span>
            </div>
            <div className="flex items-center justify-between px-4">
              <span className="text-sm text-gray-600">Rift Valley</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-900">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}