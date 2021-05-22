export declare function areIntersected(
  qx1: number,
  qy1: number,
  qx2: number,
  qy2: number,
  lx1: number,
  ly1: number,
  lx2: number,
  ly2: number
): boolean

export declare function crossOverExperiments(
  lx1: number,
  ly1: number,
  lx2: number,
  ly2: number,
  x1: number,
  y1: number
): number

export declare function distanceBetween(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number

export declare function isConvexPolygon(polygon: number[]): boolean

export declare function lineCrossedQuadrangle(
  line: number[],
  quadrangle: number[]
): [number[], number[]] | null

export declare function orthocenterOf(polygon: number[]): number[] | null
