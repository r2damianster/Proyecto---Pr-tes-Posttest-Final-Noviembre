import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import InputForm from './components/InputForm';
import Results from './components/Results';
import { calculateStatistics } from './utils/statistics';

const App: React.FC = () => {
  const [usageCount, setUsageCount] = useState(0);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const storedCount = localStorage.getItem('usageCount');
    if (storedCount) {
      setUsageCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleSubmit = (data: { pretest: number[]; posttest: number[]; usage: string }) => {
    const newResults = calculateStatistics(data.pretest, data.posttest);
    setResults(newResults);
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    localStorage.setItem('usageCount', newCount.toString());
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <Calculator className="h-14 w-14 text-cyan-600" />
              <div className="text-2xl font-bold text-gray-900">Pretest-Posttest Analysis</div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>By Dr. Arturo Rodriguez, PhD</p>
                <p>Total usage count: {usageCount}</p>
              </div>
              <InputForm onSubmit={handleSubmit} />
              {results && <Results results={results} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;