var matrix = [];
var chap = 30;
var chap1 = 30;
var gishatichQanak =10;

for (var i = 0; i < chap; i++) {
    matrix[i] = [];
    for (var j = 0; j < chap1; j++) {
        matrix[i][j] = Math.round(Math.random() * 4);

    }
}
matrix[0][0] = 5;


while (gishatichQanak > 0) {
    var x = Math.round(Math.random() * (chap - 1));
    var y = Math.round(Math.random() * (chap - 1));

    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        gishatichQanak--;
    }
}
var side = 20;
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var kendaniArr = [];
var veracnox1;
function setup() {

    createCanvas(matrix.length * side, matrix[0].length * side);
    background("grey");
    frameRate(5);


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr1 = new GrassEater(x, y, 2);
                grassEaterArr.push(gr1);
            }
            else if (matrix[y][x] == 3) {
                var gr2 = new Gishatich(x, y, 3);
                gishatichArr.push(gr2);
            }
            else if (matrix[y][x] == 4) {
                var gr3 = new kendani(x, y, 4);
                kendaniArr.push(gr3);
            }
            else if (matrix[y][x] == 5) {
                veracnox1 = new veracnox(x, y, 5);
                 
            }
        }


    }
    console.log(veracnox1);
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);



            }


        }

    }
    for (var i in gishatichArr) {
 gishatichArr[i].eat();

    }
    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
       grassEaterArr[i].eat();

    }
    for (var i in kendaniArr) {
       kendaniArr[i].krvel();

    }
    for (var i in kendaniArr) {
        kendaniArr[i].eat();
    }



    veracnox1.eat();
}

