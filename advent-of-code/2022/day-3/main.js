"use strict";
exports.__esModule = true;
var path = require("path");
var functions_1 = require("../functions");
var relativePath = "./input.txt";
var completePath = path.resolve(__dirname, relativePath);
var rucksackReorganization = function (file) {
    var lines = (0, functions_1.ReadFile)(file);
    var totalPriority = 0;
    lines.forEach(function (line) {
        var left = new Set(line.slice(0, line.length / 2));
        var right = line.slice(line.length / 2, line.length);
        for (var _i = 0, right_1 = right; _i < right_1.length; _i++) {
            var char = right_1[_i];
            if (left.has(char)) {
                totalPriority += GetPriority(char);
                break;
            }
        }
    });
    return totalPriority;
};
/*
function rucksackReorganization2(file: string): number {
  var totalPriority: number = 0;
  var lines: Array<string> = ReadFile(file);

  for (var i: number = 0; i < lines.length / 3; i++) {
    var found: boolean = false;
    var threeLines = lines.slice(3 * i, 3 * i + 3);

    var rucksacks: Array<Array<string>> = new Array<Array<string>>();
    rucksacks.push(threeLines[0].split(""));
    rucksacks.push(threeLines[1].split(""));
    rucksacks.push(threeLines[2].split(""));

    rucksacks[0].forEach((elem) => {
      if (
        rucksacks[1].includes(elem) &&
        rucksacks[2].includes(elem) &&
        !found
      ) {
        var code: number = elem.charCodeAt(0);
        console.log(elem);
        if (code >= 97 && code <= 122) {
          console.log(code - 96);
          totalPriority += code - 96;
        }
        if (code >= 65 && code <= 90) {
          console.log(code - 38);
          totalPriority += code - 38;
        }
        found = true;
      }
    });
  }

  return totalPriority;
}
*/ // MUY INEFICIENTE!
function rucksackReorganization2(file) {
    var lines = (0, functions_1.ReadFile)(file);
    var totalPriority = 0;
    for (var i = 0; i < lines.length; i += 3) {
        var firstElf = new Set(lines[i]);
        var secondElf = new Set(lines[i + 1]);
        var thirdElf = lines[i + 2];
        for (var _i = 0, thirdElf_1 = thirdElf; _i < thirdElf_1.length; _i++) {
            var char = thirdElf_1[_i];
            if (firstElf.has(char) && secondElf.has(char)) {
                totalPriority += GetPriority(char);
                break;
            }
        }
    }
    return totalPriority;
}
function GetPriority(char) {
    var code = char.charCodeAt(0);
    return code >= 97 ? code - 96 : code - 38;
}
console.log(rucksackReorganization(completePath));
console.log(rucksackReorganization2(completePath));
