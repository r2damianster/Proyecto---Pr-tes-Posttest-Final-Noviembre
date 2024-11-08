import { wilcoxonSignedRankTest, calculateConfidenceInterval } from './statisticalTests';

export const calculateStatistics = (pretest: number[], posttest: number[]) => {
  const wilcoxonResults = wilcoxonSignedRankTest(pretest, posttest);
  const confidenceIntervalResults = calculateConfidenceInterval(pretest, posttest);

  return {
    wilcoxon: wilcoxonResults,
    confidenceInterval: confidenceIntervalResults,
    pretest,
    posttest,
  };
};