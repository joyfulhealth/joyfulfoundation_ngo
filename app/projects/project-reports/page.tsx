'use client';

import React, { useState } from 'react';
import { FileText, Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  fileName: string;
  filePath: string;
}

// ─────────────────────────────────────────────
// ADD YOUR UPLOADED PDF REPORTS HERE
// Place PDF files in: /public/reports/
// Then add an entry to this array.
// ─────────────────────────────────────────────
const reports: Report[] = [
  // Example entry — replace or remove as needed:
  {
    id: '1',
    title: '2025 Annual Report',
    description: 'Annual summary of our outreach activities and impact across communities.',
    date: 'December 2025',
    category: '2025',
    fileName: '2025Report_Joyful_Health_Foundation.pdf',
    filePath: '/reports/2025Report_Joyful_Health_Foundation.pdf',
  },
  {
    id: '2',
    title: '2024 Annual Report',
    description: 'Annual summary of our outreach activities and impact across communities.',
    date: 'December 2024',
    category: '2024',
    fileName: '2024Report_Joyful_Health_Foundation.pdf',
    filePath: '/reports/2024Report_Joyful_Health_Foundation.pdf',
  },
  {
    id: '3',
    title: '2023 Annual Report',
    description: 'Annual summary of our outreach activities and impact across communities.',
    date: 'December 2023',
    category: '2023',
    fileName: '2023Report_Joyful_Health_Foundation.pdf',
    filePath: '/reports/2023Report_Joyful_Health_Foundation.pdf',
  },
];

const categories = ['All', '2025', '2024', '2023'];

const ProjectReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedReport, setExpandedReport] = useState<string | null>(null);

  const filtered =
    selectedCategory === 'All'
      ? reports
      : reports.filter((r) => r.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#4A4570] mb-3">Project Reports</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Download and review our project reports documenting the work, outcomes, and impact of
            Joyful Health Foundation initiatives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#4A4570] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#4A4570] hover:text-[#4A4570]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reports List */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-medium">No reports available yet</p>
            <p className="text-gray-400 text-sm mt-1">Check back soon for uploaded project reports.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* Report Header Row */}
                <div className="flex items-center justify-between px-6 py-5">
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B8D8BA]/30 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#4A4570]" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-[#4A4570] truncate">{report.title}</h2>
                      <p className="text-sm text-gray-400 mt-0.5">
                        {report.category} · {report.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                    <a
                      href={report.filePath}
                      download={report.fileName}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#262e40] hover:bg-[#35405a] text-white text-sm font-medium transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                    <a
                      href={report.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#4A4570] text-gray-600 hover:text-[#4A4570] text-sm font-medium transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">View</span>
                    </a>
                    <button
                      onClick={() =>
                        setExpandedReport(expandedReport === report.id ? null : report.id)
                      }
                      className="p-1.5 rounded-lg text-gray-400 hover:text-[#4A4570] hover:bg-gray-50 transition-all"
                      aria-label="Toggle details"
                    >
                      {expandedReport === report.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expandable Description + PDF Preview */}
                {expandedReport === report.id && (
                  <div className="border-t border-gray-100 px-6 py-5 space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{report.description}</p>
                    <iframe
                      src={report.filePath}
                      title={report.title}
                      className="w-full rounded-xl border border-gray-200"
                      style={{ height: '600px' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectReportsPage;