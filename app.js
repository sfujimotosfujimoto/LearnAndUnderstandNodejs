var fs = require("fs");

var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");

console.log(greet);

// var buf = new Buffer("Hello", "utf8"); //utf8 is default
// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toJSON());
// console.log(buf[2]);
//
// buf.write("wo");
// console.log(buf.toString());

// var buffer = new ArrayBuffer(8); // 8 x 8 = 64 zeros and ones
// var view = new Int32Array(buffer);
// view[0] = 5;
// view[1] = 15;
// console.log(view);
