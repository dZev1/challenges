"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var functions_1 = require("../functions");
var relativePath = "./input.txt";
var completePath = path.resolve(__dirname, relativePath);
/*
function countPairs(file: string): number {
    let lines: Array<string> = ReadFile(file);
    let sum = 0;
    lines.forEach((elem) => {
        let intervals: Array<string> = elem.split(',');

        let lInterval: Array<string> = intervals[0].split('-');
        let rInterval: Array<string> = intervals[1].split('-');

        const lMin: number = parseInt(lInterval[0]);
        const lMax: number = parseInt(lInterval[1]);

        const rMin: number = parseInt(rInterval[0]);
        const rMax: number = parseInt(rInterval[1]);

        const lLength = lMax - lMin;
        const rLength = rMax - rMin;
        var i;

        if (lLength <= rLength) {
            i = lMin;
            while (i <= lMax) {
                if (i >= rMin && i <= rMax) {
                    i++;
                    continue;
                }
                break;
            }
            if (i == lMax + 1) {sum++}
        } else {
            i = rMin;
            while (i <= rMax) {
                if (i >= lMin && i <= lMax) {
                    i++;
                    continue;
                }
                break;
            }
            if (i == rMax + 1) {sum++}
        }
    });

    return sum;
}
*/
function countPairs(file) {
    var lines = (0, functions_1.ReadFile)(file);
    var sum = 0;
    lines.forEach(function (line) {
        var parts = line.trim().split(',');
        var lStr = parts[0], rStr = parts[1];
        var _a = lStr.split('-').map(Number), lMin = _a[0], lMax = _a[1];
        var _b = rStr.split('-').map(Number), rMin = _b[0], rMax = _b[1];
        var leftContainsRight = (lMin <= rMin) && (lMax >= rMax);
        var rightContainsLeft = (rMin <= lMin) && (rMax >= lMax);
        if (leftContainsRight || rightContainsLeft)
            sum++;
    });
    return sum;
}
function CountPairs2(file) {
    var lines = (0, functions_1.ReadFile)(file);
    var sum = 0;
    lines.forEach(function (line) {
        var parts = line.trim().split(',');
        var lStr = parts[0], rStr = parts[1];
        var _a = lStr.split('-').map(Number), lMin = _a[0], lMax = _a[1];
        var _b = rStr.split('-').map(Number), rMin = _b[0], rMax = _b[1];
        // for (let i = lMin; i <= lMax; i++) {
        //     if (i >= rMin && i <= rMax) {
        //         sum++;
        //         break;
        //     }
        // }
        var overlaps = (lMax >= rMin) && (rMax >= lMin);
        if (overlaps)
            sum++;
    });
    return sum;
}
var main = function () {
    console.log(countPairs(completePath));
    console.log(CountPairs2(completePath));
};
main();
