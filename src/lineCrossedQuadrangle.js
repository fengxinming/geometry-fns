import areIntersected from './areIntersected';

/**
 * 直线是否穿过四边形
 * @param {number[]} line
 * @param {number[]} quadrangle
 * @returns {[number[], number[]]|null}
 */
export default function lineCrossedQuadrangle(line, quadrangle) {
  const lLength = line.length;
  const qLength = quadrangle.length;
  if (lLength !== 4 || qLength !== 8) {
    return null;
  }

  const res = [];
  for (let i = 0, k = 0; i < qLength; i += 2, k++) {
    const x1 = quadrangle[i];
    const y1 = quadrangle[i + 1];
    const j = (i + 2) % 8;
    const x2 = quadrangle[j];
    const y2 = quadrangle[j + 1];

    res[k] = areIntersected(x1, y1, x2, y2, line[0], line[1], line[2], line[3])
      ? [x1, y1, x2, y2]
      : null;
  }

  if (res[0] && res[2] && !res[1] && !res[3]) {
    return [res[0], res[2]];
  }
  if (!res[0] && !res[2] && res[1] && res[3]) {
    return [res[1], res[3]];
  }
  return null;
}

