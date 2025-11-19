import * as path from "path";
import { ReadFile } from "../functions";

const relativePath: string = "./input.txt"
const completePath: string = path.resolve(__dirname, relativePath);

const rucksackReorganization = (file: string) => {
    var lines: Array<string> = ReadFile(file);
    var totalPriority = 0;

    lines.forEach(line => {
        var lineElems: Array<string> = line.split('');

        var left: Array<string> = lineElems.slice(0, lineElems.length / 2);
        var right: Array<string> = lineElems.slice(lineElems.length / 2, lineElems.length);

        for (var i: number = 0; i < left.length; i++) {
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

function rucksackReorganization2(file: string): number {
    var totalPriority: number = 0;
    return 0;
}

console.log(rucksackReorganization(completePath));