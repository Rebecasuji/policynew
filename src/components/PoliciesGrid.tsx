import * as LucideIcons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}

interface PoliciesGridProps {
  policies: Policy[];
  onSelectPolicy: (policy: Policy) => void;
  loading: boolean;
}

const categoryColors: { [key: string]: string } = {
  'HR': 'from-blue-400 to-blue-600',
  'Compliance': 'from-red-400 to-red-600',
  'SOP': 'from-green-400 to-green-600',
  'Guidelines': 'from-purple-400 to-purple-600'
};

export default function PoliciesGrid({ policies, onSelectPolicy, loading }: PoliciesGridProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.FileText;
    return <IconComponent size={32} />;
  };

  const getCategoryColor = (category: string): string => {
    return categoryColors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <section id="policies-section" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Company Policies & Documents
          </h2>
          <p className="text-lg text-gray-600">
            Access all important policies, guidelines, and compliance documents
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-8 animate-pulse">
                <div className="h-12 w-12 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <div
                key={policy.id}
                onClick={() => onSelectPolicy(policy)}
                className="glass-card group p-8 cursor-pointer hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-yellow-50 to-transparent"></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(policy.category)} rounded-xl mb-4 flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition duration-300`}>
                  {getIcon(policy.icon)}
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-yellow-100/60 text-yellow-700 text-xs font-semibold rounded-full mb-3">
                    {policy.category}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {policy.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {policy.description}
                  </p>

                  <div className="flex items-center gap-2 text-yellow-600 font-semibold text-sm group-hover:gap-4 transition duration-300">
                    Read Policy
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}