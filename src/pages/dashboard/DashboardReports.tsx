import React from 'react';
import { FileText, Download, Filter, Calendar, TreePine, Users2, ArrowRight } from 'lucide-react';

interface Report {
  id: number;
  title: string;
  type: 'impact' | 'volunteer' | 'environmental' | 'financial';
  date: string;
  status: 'ready' | 'generating' | 'scheduled';
  description: string;
  fileSize?: string;
}

const reports: Report[] = [
  {
    id: 1,
    title: "Q1 2024 Environmental Impact Report",
    type: "impact",
    date: "2024-03-15",
    status: "ready",
    description: "Comprehensive analysis of tree planting initiatives and their environmental impact.",
    fileSize: "2.5 MB"
  },
  {
    id: 2,
    title: "Volunteer Engagement Analysis",
    type: "volunteer",
    date: "2024-03-10",
    status: "ready",
    description: "Detailed report on volunteer participation and community engagement metrics.",
    fileSize: "1.8 MB"
  },
  {
    id: 3,
    title: "Carbon Offset Calculations",
    type: "environmental",
    date: "2024-03-01",
    status: "ready",
    description: "Analysis of carbon sequestration from planted trees and environmental benefits.",
    fileSize: "3.2 MB"
  }
];

export function DashboardReports() {
  return (
    <div className="space-y-6">
      {/* Report Generation */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Generate New Report
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ReportTypeCard
            icon={<TreePine className="h-6 w-6 text-green-600" />}
            title="Impact Report"
            description="Comprehensive analysis of your environmental initiatives"
          />
          <ReportTypeCard
            icon={<Users2 className="h-6 w-6 text-blue-600" />}
            title="Volunteer Report"
            description="Detailed volunteer engagement metrics"
          />
          <ReportTypeCard
            icon={<Calendar className="h-6 w-6 text-purple-600" />}
            title="Event Report"
            description="Summary of planting events and participation"
          />
          <ReportTypeCard
            icon={<FileText className="h-6 w-6 text-orange-600" />}
            title="Custom Report"
            description="Create a customized report with selected metrics"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
            <option>All Reports</option>
            <option>Impact Reports</option>
            <option>Volunteer Reports</option>
            <option>Environmental Reports</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
        <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Reports List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
        <div className="p-6 space-y-6">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Scheduled Reports
          </h3>
          <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
            Manage Schedule
          </button>
        </div>
        <div className="space-y-4">
          <ScheduledReport
            title="Monthly Impact Report"
            schedule="Every 1st of the month"
            nextRun="2024-04-01"
          />
          <ScheduledReport
            title="Quarterly Environmental Analysis"
            schedule="Every 3 months"
            nextRun="2024-06-30"
          />
        </div>
      </div>
    </div>
  );
}

function ReportTypeCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-green-500 dark:hover:border-green-500 transition-all group">
      <div className="mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      <div className="flex items-center text-green-600 dark:text-green-400">
        <span className="text-sm font-medium">Generate</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </button>
  );
}

function ReportCard({ report }: { report: Report }) {
  const statusColors = {
    ready: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    generating: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    scheduled: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <FileText className="h-5 w-5 text-green-600" />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {report.title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          {report.description}
        </p>
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            Generated: {new Date(report.date).toLocaleDateString()}
          </span>
          {report.fileSize && (
            <span className="text-gray-500 dark:text-gray-400">
              Size: {report.fileSize}
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[report.status]}`}>
            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
          </span>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
          <Download className="h-5 w-5 mr-2" />
          Download
        </button>
        <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
          View
        </button>
      </div>
    </div>
  );
}

function ScheduledReport({ title, schedule, nextRun }: {
  title: string;
  schedule: string;
  nextRun: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div>
        <h4 className="text-gray-900 dark:text-white font-medium mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{schedule}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600 dark:text-gray-400">Next Run</p>
        <p className="text-gray-900 dark:text-white font-medium">
          {new Date(nextRun).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}