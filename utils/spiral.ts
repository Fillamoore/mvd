// utils/spiral.ts

/**
 * Generates a clockwise spiral order starting from the center of a square grid.
 * Returns an array of tile objects with id, row, and col.
 */
export function generateCorrectClockwiseSpiralOrder(size: number): { id: number; row: number; col: number }[] {
  const center = Math.floor(size / 2);
  const visited = new Set<string>();
  const result: { id: number; row: number; col: number }[] = [];

  let row = center;
  let col = center;
  let steps = 1;
  let direction = 0; // 0=right, 1=down, 2=left, 3=up
  let id = 1;

  const directions = [
    [0, 1],   // right
    [1, 0],   // down
    [0, -1],  // left
    [-1, 0],  // up
  ];

  result.push({ id: id++, row, col });
  visited.add(`${row},${col}`);

  while (result.length < size * size) {
    for (let repeat = 0; repeat < 2; repeat++) {
      const [dr, dc] = directions[direction % 4];
      for (let i = 0; i < steps; i++) {
        row += dr;
        col += dc;
        if (row >= 0 && row < size && col >= 0 && col < size) {
          const key = `${row},${col}`;
          if (!visited.has(key)) {
            result.push({ id: id++, row, col });
            visited.add(key);
          }
        }
      }
      direction++;
    }
    steps++;
  }

  return result.slice(0, 49); // Only return first 49 tiles
}
