/**
 * 跨立实验
 *
 * 向量: P=(x2-x1, y2-y1), Q=(x3-x1, y3-y1)
 * 叉积: PQ=(x2-x1)*(y3-y1) - (x3-x1)*(y2-y1)
 *
 * @param {number} lx1
 * @param {number} ly1
 * @param {number} lx2
 * @param {number} ly2
 * @param {number} x1
 * @param {number} y1
 * @returns {number}
 */
export default function crossOverExperiments(lx1, ly1, lx2, ly2, x1, y1) {
  return (lx2 - lx1) * (y1 - ly1) - (x1 - lx1) * (ly2 - ly1);
}
