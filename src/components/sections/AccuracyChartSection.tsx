import React from 'react';

const AccuracyChartSection = () => {
  const data = [
    { label: 'Baseline', baseValue: 35, improvement: 0, totalValue: 35 },
    { label: 'GPT-3', baseValue: 38, improvement: 50, totalValue: 88 },
    { label: 'GPT-3.5', baseValue: 42, improvement: 50, totalValue: 92 },
    { label: 'Sonnet 4', baseValue: 45, improvement: 50, totalValue: 95 },
    { label: 'O3', baseValue: 48, improvement: 50, totalValue: 98 },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-section">
        <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="section-title">
            LLMs themselves don't <span className="gradient-text">crack your problem</span>
          </h2>
          <p className="section-subtitle">
            See how Co-Datascientist outperforms traditional approaches with intelligent automation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-800">Accuracy Comparison</h3>
            
            {/* Legend */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded"></div>
                <span className="text-xs sm:text-sm text-gray-700">Base LLM Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
                <span className="text-xs sm:text-sm text-gray-700">Co-Datascientist</span>
              </div>
            </div>
            
            <div className="flex items-end justify-center space-x-2 sm:space-x-3 md:space-x-4 h-48 sm:h-56 md:h-64 relative overflow-x-auto">
              {/* Horizontal line at baseline level */}
              <div 
                className="absolute w-full h-0.5 bg-gray-400"
                style={{ 
                  bottom: `${(data[0].baseValue / 100) * 100}%`,
                  left: '0',
                  right: '0'
                }}
              />
              
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 min-w-0 flex-1">
                  <div className="relative w-8 sm:w-12 md:w-16">
                    <div className="bg-white rounded-t-lg w-full relative overflow-hidden" style={{ height: '200px' }}>
                      {/* Base gray section at the bottom */}
                      <div
                        className="w-full bg-gray-300 transition-all duration-1000 ease-out absolute bottom-0"
                        style={{ 
                          height: `${(item.baseValue / 100) * 200}px`,
                          borderBottomLeftRadius: '0.5rem',
                          borderBottomRightRadius: '0.5rem',
                          borderTopLeftRadius: item.improvement === 0 ? '0.5rem' : '0',
                          borderTopRightRadius: item.improvement === 0 ? '0.5rem' : '0',
                        }}
                      />
                      {/* Blue improvement section on top */}
                      {item.improvement > 0 && (
                        <div
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 ease-out absolute bottom-0"
                          style={{ 
                            height: `${(item.improvement / 100) * 200}px`,
                            bottom: `${(item.baseValue / 100) * 200}px`,
                            borderTopLeftRadius: '0.5rem',
                            borderTopRightRadius: '0.5rem',
                          }}
                        />
                      )}
                    </div>
                    <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2">
                      <span className="text-xs font-semibold text-gray-800">
                        {item.totalValue}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-700 text-center max-w-12 sm:max-w-16 break-words">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <p className="text-gray-600 text-xs sm:text-sm">
                Co-Datascientist boosts accuracy by 50% across all traditional LLM approaches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccuracyChartSection; 