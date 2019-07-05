'use strict';

const myCanvasWidth: number = 700;
const myCanvasHeigth: number = 700;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');

let cordList: number[][]= [[10, 10], [290,  10], [290, 290], [10, 290]];




