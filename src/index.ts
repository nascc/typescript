import express from 'express';

const app = express();

app.listen(3333);


function op(x: number, y:number) {
    return x + y;

;}

console.log(op(2, 3));

