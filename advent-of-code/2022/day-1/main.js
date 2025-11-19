"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var filePath = "./input.txt";
function countCalories(route) {
    var completePath = path.resolve(__dirname, route);
    var content = fs.readFileSync(completePath, 'utf-8');
    var lines = content.split(/\r?\n/);
    var calories = [];
    var i = 0;
    lines.forEach(function (element) {
        if (element == "") {
            i++;
        }
        else {
            if (calories.length == i + 1) {
                calories[i] += parseInt(element);
            }
            else {
                calories.push(parseInt(element));
            }
        }
    });
    return calories;
}
var calories = countCalories(filePath);
calories.sort(function (a, b) { return b - a; });
console.log(calories.slice(0, 3).reduce(function (acc, e) { return acc + e; }));
console.log(calories);
