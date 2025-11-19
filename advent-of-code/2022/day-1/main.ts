import * as path from 'path';
import { ReadFile } from '../functions'

const relativePath = "./input.txt"
const completePath = path.resolve(__dirname, relativePath);

function countCalories(file: string): Array<number> {
    var lines: string[] = ReadFile(file);

    var calories: Array<number> = [];
    var i: number = 0;

    lines.forEach(element => {
        if (element == "") {
            i++;
        } else {
            if (calories.length == i + 1) {
                calories[i] += parseInt(element);
            } else {
                calories.push(parseInt(element));
            }
        }
    });

    return calories;
}

const calories: Array<number> = countCalories(completePath);

calories.sort((a, b) => b - a);
console.log(calories.slice(0, 3).reduce((acc, e) => acc + e));

console.log(calories);



