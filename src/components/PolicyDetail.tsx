import { ArrowLeft, Download } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  file_url: string | null;
  icon: string;
}

interface PolicyDetailProps {
  policy: Policy;
  onBack: () => void;
}

const categoryColors: { [key: string]: string } = {
  'HR': 'from-blue-400 to-blue-600',
  'Compliance': 'from-red-400 to-red-600',
  'SOP': 'from-green-400 to-green-600',
  'Guidelines': 'from-purple-400 to-purple-600'
};

export default function PolicyDetail({ policy, onBack }: PolicyDetailProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.FileText;
    return <IconComponent size={24} />;
  };

  const getCategoryColor = (category: string): string => {
    return categoryColors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-semibold transition duration-300 hover:gap-3"
        >
          <ArrowLeft size={20} />
          Back to Policies
        </button>

        <div className="glass-card p-8 md:p-12 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className={`w-20 h-20 bg-gradient-to-br ${getCategoryColor(policy.category)} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
              {getIcon(policy.icon)}
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-yellow-100/60 text-yellow-700 text-sm font-semibold rounded-full mb-4">
                {policy.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {policy.title}
              </h1>
              <p className="text-lg text-gray-600">
                {policy.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/40">
            {policy.file_url && (
              <a
                href={policy.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass-card text-gray-900 rounded-lg font-semibold hover:bg-white/60 transition duration-300"
              >
                <Download size={18} />
                Download PDF
              </a>
            )}
          </div>
        </div>

        <div className="glass-card p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Details</h2>
          <div className="prose prose-sm md:prose-base max-w-none">
            {policy.content.split('\n').map((line, i) => {
              if (!line.trim()) return null;

              if (line.startsWith('•')) {
                return (
                  <div key={i} className="flex gap-4 mb-3 text-gray-700 leading-relaxed">
                    <span className="text-yellow-600 font-bold mt-1 flex-shrink-0">•</span>
                    <span>{line.replace('•', '').trim()}</span>
                  </div>
                );
              }

              if (line.match(/^SECTION \d+/) || line.match(/^[A-Z\s&]+$/)) {
                return (
                  <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-yellow-200">
                    {line}
                  </h3>
                );
              }

              if (line.startsWith('[')) {
                return (
                  <p key={i} className="text-sm text-gray-600 italic mb-4 px-4 py-2 bg-yellow-50/50 rounded-lg border-l-2 border-yellow-300">
                    {line}
                  </p>
                );
              }

              if (line.match(/^[A-Z][A-Z\s:]+$/)) {
                return (
                  <h4 key={i} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                    {line}
                  </h4>
                );
              }

              return (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-8 glass-card p-6 text-center text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>For questions, contact HR at <a href="mailto:hr@ctint.in" className="text-yellow-600 hover:underline">hr@ctint.in</a></p>
        </div>
      </div>
    </div>
  );
}