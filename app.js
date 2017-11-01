var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/greet.txt");

var writable = fs.createWriteStream(__dirname + "/greet_copy.txt");

var compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");
var gzip = zlib.createGzip();
// this does the same as below
readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

// readable.on("data", function(chunk)
//   console.log(chunk.length);
//   writable.write(chunk);
// });

// var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");
//
// console.log(greet);
//
// var greet2 = fs.readFile(__dirname + "/greet.txt", "utf8", function(err, data) {
//   console.log(data);
// });
//
// console.log("DONE!");

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
