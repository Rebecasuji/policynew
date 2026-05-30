export default function Hero() {
  const scrollToSection = () => {
    const element = document.getElementById('policies-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in">
        <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Company <span className="gradient-text">Policies</span> & Guidelines
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Your comprehensive digital handbook for company policies, SOPs, HR documents, and compliance information
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToSection}
            className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Explore Policies
          </button>
          <a
            href="https://www.ctint.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-card text-gray-900 rounded-xl font-semibold hover:bg-white/60 transition duration-300"
          >
            Visit Website
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { label: 'Policies', value: '7+' },
            { label: 'Categories', value: '4' },
            { label: 'Always Updated', value: '✓' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 backdrop-blur-md">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}