/**
 * Input: responseTimes = [100, 200, 150,300]
 * Output: 2
 * Explanation:
  - Day 0: 100 (no previous days, skip) 
  - Day 1: 200 > average(100) = 100 → count = 1 
  - Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
  - Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.
 */

export default function countResponseTimeRegressions(
  responseTimes: number[]
): number {
  let result: number = 0;

  if (responseTimes.length <= 1) {
    return result;
  }

  let summarize = responseTimes[0] ?? 0;
  for (let i = 1; i < responseTimes.length; i++) {
    const avgTime = summarize / i;
    if (responseTimes[i]! > avgTime) {
      result++;
    }

    summarize += responseTimes[i] ?? 0;
  }

  return result;
}
