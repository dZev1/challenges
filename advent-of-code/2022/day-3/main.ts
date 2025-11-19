import * as path from "path";
import { ReadFile } from "../functions";

const relativePath: string = "./input.txt";
const completePath: string = path.resolve(__dirname, relativePath);

const rucksackReorganization = (file: string) => {
  var lines: Array<string> = ReadFile(file);
  var totalPriority = 0;

  lines.forEach((line) => {
    const left = new Set(line.slice(0, line.length / 2));
    const right = line.slice(line.length / 2, line.length);

    for (const char of right) {
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

function rucksackReorganization2(file: string): number {
  const lines: string[] = ReadFile(file);
  let totalPriority: number = 0;

  for (let i: number = 0; i < lines.length; i += 3) {
    const firstElf = new Set(lines[i]);
    const secondElf = new Set(lines[i + 1]);
    const thirdElf = lines[i + 2];

    for (const char of thirdElf) {
      if (firstElf.has(char) && secondElf.has(char)) {
        totalPriority += GetPriority(char);
        break;
      }
    }
  }
  return totalPriority;
}

function GetPriority(char: string): number {
  var code: number = char.charCodeAt(0);
  return code >= 97 ? code - 96 : code - 38;
}

console.log(rucksackReorganization(completePath));
console.log(rucksackReorganization2(completePath));
