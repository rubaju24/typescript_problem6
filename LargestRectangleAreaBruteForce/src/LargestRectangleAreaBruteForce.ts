const largestRectangleAreaBruteForce = (heights: number[]): number => {
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i < n; i++) {
    let minHeight = Infinity;
    for (let j = i; j < n; j++) {
      minHeight = Math.min(minHeight, heights[j]!);
      const width = j - i + 1;
      const area = minHeight * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};
console.log(largestRectangleAreaBruteForce([6, 2, 5, 4, 5, 1, 6]));
