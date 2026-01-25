"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var functions_1 = require("../functions");
var relativePath = "./input.txt";
var completePath = path.resolve(__dirname, relativePath);
function getJoltage(lines) {
    var sum = 0;
    lines.forEach(function (line) {
        var maxJoltage = 0;
        for (var i = 0; i < line.length - 1; i++) {
            for (var j = i + 1; j < line.length; j++) {
                var number = parseInt(line.charAt(i) + line.charAt(j));
                if (number > maxJoltage) {
                    maxJoltage = number;
                }
            }
        }
        console.log(maxJoltage);
        sum += maxJoltage;
    });
    return sum;
}
console.log(getJoltage((0, functions_1.ReadFile)(completePath)));
