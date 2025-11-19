import * as fs from 'fs';
export function ReadFile(route: string): Array<string> {
    const content: string = fs.readFileSync(route, 'utf-8');

    var lines: string[] = content.split(/\r?\n/);
    return lines;
}