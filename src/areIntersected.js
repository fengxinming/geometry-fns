import crossOverExperiments from './crossOverExperiments';

function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b;
}

/**
 * 判断两根直线是否相交
 *
 * @param {number} qx1
 * @param {number} qy1
 * @param {number} qx2
 * @param {number} qy2
 * @param {number} lx1
 * @param {number} ly1
 * @param {number} lx2
 * @param {number} ly2
 * @returns {boolean}
 */
export default function areIntersected(qx1, qy1, qx2, qy2, lx1, ly1, lx2, ly2) {
  const res = false;

  // 快速排斥，以l1、l2为对角线的矩形必相交，否则两线段不相交
  if (
    max(qx1, qx2) >= min(lx1, lx2) // 矩形1最右端大于矩形2最左端
    && max(lx1, lx2) >= min(qx1, qx2) // 矩形2最右端大于矩形最左端
    && max(qy1, qy2) >= min(ly1, ly2) // 矩形1最高端大于矩形最低端
    && max(ly1, ly2) >= min(qy1, qy2) // 矩形2最高端大于矩形最低端
  ) {
    // 若通过快速排斥则进行跨立实验
    return crossOverExperiments(qx1, qy1, qx2, qy2, lx1, ly1) * crossOverExperiments(qx1, qy1, qx2, qy2, lx2, ly2) <= 0
          && crossOverExperiments(lx1, ly1, lx2, ly2, qx1, qy1) * crossOverExperiments(lx1, ly1, lx2, ly2, qx2, qy2) <= 0;
  }
  return res;
}
