import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white/10 to-white/30 backdrop-blur-md border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src="/image.png" alt="Concept Trunk Interiors logo" className="h-10 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Premium interior design solutions with comprehensive policies and guidelines for excellence.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="https://www.ctint.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition">Company Website</a></li>
              <li><a href="mailto:hr@ctint.in" className="text-gray-600 hover:text-yellow-600 transition">HR Contact</a></li>
              <li><a href="#policies-section" className="text-gray-600 hover:text-yellow-600 transition">All Policies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hr@ctint.in" className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition">
                <Mail size={18} />
                <span>hr@ctint.in</span>
              </a>
              <a href="https://www.ctint.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition">
                <Phone size={18} />
                <span>www.ctint.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-600">
          <p>&copy; 2026 Concept Trunk Interiors. All rights reserved. | Policy & Guidelines Hub</p>
        </div>
      </div>
    </footer>
  );
}