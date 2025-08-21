'use client';

export default function LogoBanner() {
  const logos = [
    "Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", 
    "Logo 6", "Logo 7", "Logo 8", "Logo 9", "Logo 10",
    "Logo 11", "Logo 12"
  ];

  return (
    <div className="bg-white border-t border-gray-200 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 font-medium">
            Empresas que confían en nosotros
          </p>
        </div>
        
        <div className="relative">
          <div className="flex" style={{
            animation: 'scroll 30s linear infinite'
          }}>
            {/* Primera iteración */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                  <span className="text-gray-500 text-sm font-medium">{logo}</span>
                </div>
              </div>
            ))}
            
            {/* Segunda iteración para loop continuo */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
                  <span className="text-gray-500 text-sm font-medium">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}