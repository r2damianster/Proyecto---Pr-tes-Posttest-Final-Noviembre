import { sum, mean, standardDeviation, tTest } from 'simple-statistics';

export const wilcoxonSignedRankTest = (pretest: number[], posttest: number[]) => {
  const differences = pretest.map((pre, i) => posttest[i] - pre);
  const ranks = differences.map((diff, i) => ({ diff, index: i }))
    .sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff))
    .map((item, i) => ({ ...item, rank: i + 1 }));

  const positiveRanks = ranks.filter(r => r.diff > 0);
  const negativeRanks = ranks.filter(r => r.diff < 0);
  const ties = ranks.filter(r => r.diff === 0);

  const positiveSum = sum(positiveRanks.map(r => r.rank));
  const negativeSum = sum(negativeRanks.map(r => r.rank));

  const W = Math.min(positiveSum, negativeSum);
  const n = pretest.length - ties.length; // Effective sample size

  const z = (W - (n * (n + 1)) / 4) / Math.sqrt((n * (n + 1) * (2 * n + 1)) / 24);
  const pValue = 2 * (1 - Math.abs(z));

  // Calculate effect size (r)
  const r = Math.abs(z) / Math.sqrt(n);

  return {
    W,
    z,
    pValue,
    effectSize: r,
    sampleSize: n,
    positiveRanks: positiveRanks.length,
    negativeRanks: negativeRanks.length,
    ties: ties.length,
    significant: pValue < 0.05,
  };
};

export const calculateConfidenceInterval = (pretest: number[], posttest: number[]) => {
  // ... (keep the existing code for this function)
};