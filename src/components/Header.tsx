import { Mail, Globe, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/image.png" alt="Concept Trunk Interiors logo" className="h-12" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Concept Trunk</h1>
              <p className="text-sm text-gray-600">Policy & Guidelines Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hr@ctint.in" className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition">
              <Mail size={20} />
              <span className="hidden sm:inline text-sm">hr@ctint.in</span>
            </a>
            <a href="https://www.ctint.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition">
              <Globe size={20} />
              <span className="hidden sm:inline text-sm">www.ctint.in</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}