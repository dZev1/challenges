"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var functions_1 = require("../functions");
var relativePath = "./input.txt";
var completePath = path.resolve(__dirname, relativePath);
var rucksackReorganization = function (file) {
    var lines = (0, functions_1.ReadFile)(file);
    var totalPriority = 0;
    lines.forEach(function (line) {
        var lineElems = line.split('');
        var left = lineElems.slice(0, lineElems.length / 2);
        var right = lineElems.slice(lineElems.length / 2, lineElems.length);
        for (var i = 0; i < left.length; i++) {
            if (left.includes(right[i])) {
                var code = right[i].charCodeAt(0);
                if (code >= 97 && code <= 122) {
                    totalPriority += code - 96;
                }
                if (code >= 65 && code <= 90) {
                    totalPriority += code - 38;
                }
                break;
            }
            if (right.includes(left[i])) {
                var code = left[i].charCodeAt(0);
                if (code >= 97 && code <= 122) {
                    totalPriority += code - 96;
                }
                if (code >= 65 && code <= 90) {
                    totalPriority += code - 38;
                }
                break;
            }
        }
    });
    return totalPriority;
};
console.log(rucksackReorganization(completePath));
