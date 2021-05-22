# geometry-fns

[![npm package](https://nodei.co/npm/geometry-fns.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/geometry-fns)

> A collection of functions for working with points geometry.

[![NPM version](https://img.shields.io/npm/v/geometry-fns.svg?style=flat)](https://npmjs.org/package/geometry-fns)
[![NPM Downloads](https://img.shields.io/npm/dm/geometry-fns.svg?style=flat)](https://npmjs.org/package/geometry-fns)
[![](https://data.jsdelivr.com/v1/package/npm/geometry-fns/badge)](https://www.jsdelivr.com/package/npm/geometry-fns)


## Installation

```bash
npm i geometry-fns --save
```

## API

### areIntersected

判断两根直线是否相交，传入两条直线的起点和终点的x和y坐标。

```ts
import { areIntersected } from 'geometry-fns'

function areIntersected(
  qx1: number, 
  qy1: number, 
  qx2: number, 
  qy2: number, 
  lx1: number, 
  ly1: number, 
  lx2: number, 
  ly2: number
): boolean
```

### crossOverExperiments

跨立实验(求向量的叉积)，传入一条直线的起点和终点的x和y坐标，跟另一个点的x和y坐标做跨立实验。

```ts
import { crossOverExperiments } from 'geometry-fns'

function crossOverExperiments(
	lx1: number, 
	ly1: number, 
	lx2: number, 
	ly2: number, 
	x1: number, 
	y1: number
): number
```

### distanceBetween

求两个坐标点之间的距离

```ts
import { distanceBetween } from 'geometry-fns'

function distanceBetween(
  x1: number,
  y1: number, 
  x2: number, 
  y2: number
): number
```

### isConvexPolygon

判断是否凸多边形，传入一个数组包含多个点的x和y坐标组成的多边形

```ts
import { isConvexPolygon } from 'geometry-fns'

function isConvexPolygon(polygon: number[]): boolean
```

### lineCrossedQuadrangle

判断直线是否穿过四边形，如果穿过就返回两条直线的坐标数组

```ts
import { lineCrossedQuadrangle } from 'geometry-fns'

function lineCrossedQuadrangle(
  line: number[], 
  quadrangle: number[]
): [number[], number[]] | null
```

### orthocenterOf

求多边形的重心

```ts
import { orthocenterOf } from 'geometry-fns'

function orthocenterOf(polygon: number[]): number[] | null
```
