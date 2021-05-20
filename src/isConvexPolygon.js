import crossOverExperiments from './crossOverExperiments';

/**
 * 判断凸多边形
 *
 * @param {number[]} polygon
 * @returns {Boolean}
 */
export default function isConvexPolygon(polygon) {
  const { length } = polygon;
  if (length < 6 || length % 2 !== 0) {
    return false;
  }

  const direction = crossProduct(polygon, 0, length);
  for (let i = 2; i < length; i += 2) {
    const nextDirection = crossProduct(polygon, i, length);
    if (direction * nextDirection <= 0) {
      return false;
    }
  }

  return true;
}

/**
 * 找方向，大于0为顺时针，小于零为逆时针
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @returns {number}
 */
function crossProduct(polygon, start, length) {
  const x1 = polygon[start];
  const y1 = polygon[start + 1];
  const j = (start + 2) % length;
  const x2 = polygon[j];
  const y2 = polygon[j + 1];
  const k = (start + 4) % length;
  const x3 = polygon[k];
  const y3 = polygon[k + 1];

  // 向量叉积
  return crossOverExperiments(x1, y1, x2, y2, x3, y3);
}
