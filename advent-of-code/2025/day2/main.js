"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var relativePath = "./input.txt";
var completePath = path.resolve(__dirname, relativePath);
function invalidNumsPart1(content) {
    var sum = 0;
    var intervals = content.split(",");
    intervals.forEach(function (interval) {
        var leftRight = interval.split("-");
        var left = leftRight[0];
        var right = leftRight[1];
        for (var i = parseInt(left); i <= parseInt(right); i++) {
            var num = i.toString();
            var n = num.length;
            if (n % 2 == 1)
                continue;
            var fHalf = num.substring(0, Math.floor(n / 2));
            var sHalf = num.substring(Math.floor(n / 2), n);
            if (fHalf === sHalf)
                sum += i;
        }
    });
    return sum;
}
function invalidNumsPart2(content) {
    var sum = 0;
    var intervals = content.split(",");
    intervals.forEach(function (interval) {
        var leftRight = interval.split("-");
        var left = leftRight[0];
        var right = leftRight[1];
        for (var i = parseInt(left); i <= parseInt(right); i++) {
            var num = i.toString();
            if (num.concat(num)
                .substring(1, 2 * num.length - 1)
                .includes(num))
                sum += i;
        }
    });
    return sum;
}
console.log(invalidNumsPart2(fs.readFileSync(completePath, 'utf-8')));
