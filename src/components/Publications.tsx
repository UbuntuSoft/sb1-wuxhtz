import React from 'react';
import { ChevronRight, FileText, Download, Calendar } from 'lucide-react';

interface Publication {
  title: string;
  type: string;
  date: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
}

const publications: Publication[] = [
  {
    title: "Annual Environmental Impact Report 2023",
    type: "Report",
    date: "February 2024",
    description: "Comprehensive analysis of environmental initiatives and their impact across Kenya.",
    fileSize: "2.5 MB",
    downloadUrl: "#"
  },
  {
    title: "Tree Planting Best Practices Guide",
    type: "Publication",
    date: "January 2024",
    description: "Technical guide for successful tree planting and maintenance.",
    fileSize: "1.8 MB",
    downloadUrl: "#"
  },
  {
    title: "Corporate Environmental Responsibility Framework",
    type: "White Paper",
    date: "December 2023",
    description: "Guidelines for corporate participation in environmental conservation.",
    fileSize: "3.2 MB",
    downloadUrl: "#"
  }
];

export function Publications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications & Reports</h2>
            <p className="text-gray-600 max-w-2xl">
              Access our latest research, reports, and educational materials.
            </p>
          </div>
          <button className="text-green-600 hover:text-green-700 flex items-center">
            View All Resources <ChevronRight className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} publication={pub} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <FileText className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-600">{publication.type}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {publication.title}
          </h3>
          <p className="text-gray-600 mb-4">{publication.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {publication.date}
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              {publication.fileSize}
            </div>
          </div>
        </div>
        <a
          href={publication.downloadUrl}
          className="ml-4 inline-flex items-center px-4 py-2 border border-green-600 rounded-lg text-green-600 hover:bg-green-50 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
}