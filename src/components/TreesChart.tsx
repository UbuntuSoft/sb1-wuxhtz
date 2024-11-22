import React from 'react';

export function TreesChart() {
  return (
    <div className="relative">
      <div className="h-[300px] flex items-end space-x-2">
        {[65, 45, 75, 50, 85, 70, 90, 55, 45, 60, 75, 80].map((height, index) => (
          <div key={index} className="flex-1 group">
            <div 
              className="bg-green-100 group-hover:bg-green-200 transition rounded-t"
              style={{ height: `${height}%` }}
            >
              <div 
                className="bg-green-500 group-hover:bg-green-600 transition rounded-t h-full"
                style={{ opacity: height / 100 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
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
  );
}