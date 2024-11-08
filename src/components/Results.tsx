import React from 'react';

interface ResultsProps {
  results: {
    wilcoxon: {
      W: number;
      z: number;
      pValue: number;
      effectSize: number;
      sampleSize: number;
      positiveRanks: number;
      negativeRanks: number;
      ties: number;
      significant: boolean;
    };
    confidenceInterval: {
      mean: {
        pretest: number;
        posttest: number;
        difference: number;
      };
      standardDeviation: number;
      confidenceLevel: number;
      marginOfError: number;
      effectSize: number;
      significant: boolean;
      lowerBound: number;
      upperBound: number;
      tValue: number;
    };
    pretest: number[];
    posttest: number[];
  };
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="mt-8 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Wilcoxon Signed-Rank Test Results</h3>
        <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">W (Wilcoxon statistic)</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.W.toFixed(2)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Z statistic</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.z.toFixed(4)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">p-value</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.pValue.toFixed(4)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Effect size (r)</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.effectSize.toFixed(4)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">N (effective sample size)</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.sampleSize}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Positive ranks</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.positiveRanks}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Negative ranks</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.negativeRanks}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Ties</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.ties}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Significant Difference</dt>
            <dd className="mt-1 text-sm text-gray-900">{results.wilcoxon.significant ? 'Yes' : 'No'}</dd>
          </div>
        </dl>
      </div>
      {/* Keep the existing Confidence Interval Results section */}
      {/* ... */}
    </div>
  );
};

export default Results;