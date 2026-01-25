import * as path from 'path';
import * as fs from 'fs';

const relativePath: string = "./input.txt"
const completePath: string = path.resolve(__dirname, relativePath);

function invalidNumsPart1(content: string): number {
    let sum: number = 0;
    let intervals: string[] = content.split(",");

    intervals.forEach(interval => {
        let leftRight: string[] = interval.split("-");
        let left: string = leftRight[0];
        let right: string = leftRight[1];

        for (let i: number = parseInt(left); i <= parseInt(right); i++) {
            let num: string = i.toString();
            let n = num.length
            if (n % 2 == 1) continue;

            let fHalf: string = num.substring(0, Math.floor(n / 2));
            let sHalf: string = num.substring(Math.floor(n / 2), n);

            if (fHalf === sHalf) sum += i;
        }
    });
    return sum;
}

function invalidNumsPart2(content: string): number {
    let sum: number = 0;
    let intervals: string[] = content.split(",");

    intervals.forEach(interval => {
        let leftRight: string[] = interval.split("-");
        let left: string = leftRight[0];
        let right: string = leftRight[1];

        for (let i: number = parseInt(left); i <= parseInt(right); i++) {
            let num: string = i.toString();

            if (num.concat(num)
                .substring(1, 2 * num.length - 1)
                .includes(num)
            ) sum += i;
        }
    });
    return sum;
}

console.log(invalidNumsPart2(fs.readFileSync(completePath, 'utf-8')));