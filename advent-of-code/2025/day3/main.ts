import * as path from 'path';
import { ReadFile } from '../functions';

const relativePath: string = "./input.txt"
const completePath: string = path.resolve(__dirname, relativePath);

function getJoltage(lines: string[]): number {
    let sum: number = 0;

    lines.forEach((line) => {
        let maxJoltage: number = 0

        for (let i: number = 0; i < line.length - 1; i++) {
            for (let j: number = i + 1; j < line.length; j++) {
                const number = parseInt(line.charAt(i) + line.charAt(j));
                if (number > maxJoltage) {
                    maxJoltage = number;
                }
            }
        }

        console.log(maxJoltage);

        sum += maxJoltage;
    })

    return sum;
}


console.log(getJoltage(ReadFile(completePath)));