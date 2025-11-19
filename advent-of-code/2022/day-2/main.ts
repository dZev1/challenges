import * as path from 'path';
import { ReadFile } from '../functions';

const relativePath: string = "./input.txt"
const completePath: string = path.resolve(__dirname, relativePath);

enum Score {
    WIN = 6,
    TIE = 3,
    LOSE = 0
}

enum Play {
    ROCK = 1,
    PAPER = 2,
    SCISSORS = 3,
}

var oppMoveMap: Map<string, Play> = new Map<string, Play>()

oppMoveMap.set('A', Play.ROCK);
oppMoveMap.set('B', Play.PAPER);
oppMoveMap.set('C', Play.SCISSORS);

var myHandMap: Map<string, Score> = new Map<string, Score>();

myHandMap.set('X', Score.LOSE);
myHandMap.set('Y', Score.TIE);
myHandMap.set('Z', Score.WIN);


function getScore(file: string): number {
    const lines: Array<string> = ReadFile(file);
    var score: number = 0;
    
    lines.forEach(element => {
        var round: Array<string> = element.split(' ');
        
        var opponentMove: Play | undefined = oppMoveMap.get(round[0]);
        var myMove: string = round[1];

        switch(opponentMove) {
            case Play.ROCK:
                switch(myMove) {
                    case 'X':
                        score += 1 + Score.TIE;
                        break;
                    case 'Y':
                        score += 2 + Score.WIN;
                        break;
                    default:
                        score += 3 + Score.LOSE;
                        break;
                }
            break;
            case Play.PAPER:
                switch(myMove) {
                    case 'X':
                        score += 1 + Score.LOSE;
                        break;
                    case 'Y':
                        score += 2 + Score.TIE;
                        break;
                    default:
                        score += 3 + Score.WIN;
                        break;
                }
            break;
            case Play.SCISSORS:
                switch(myMove) {
                    case 'X':
                        score += 1 + Score.WIN;
                        break;
                    case 'Y':
                        score += 2 + Score.LOSE;
                        break;
                    default:
                        score += 3 + Score.TIE;
                        break;
                }
            break;
        }
    });

    return score;
}

function getScoreCorrectly(file: string): number {
    const lines: Array<string> = ReadFile(file);
    var score: number = 0;
    
    lines.forEach(element => {
        var round: Array<string> = element.split(' ');
        
        var opponentMove: Play | undefined = oppMoveMap.get(round[0]);
        var myMove: Score | undefined = myHandMap.get(round[1]);

        switch(opponentMove) {
            case Play.ROCK:
                switch(myMove) {
                    case Score.LOSE:
                        score += Play.SCISSORS + Score.LOSE;
                        break;
                    case Score.TIE:
                        score += Play.ROCK + Score.TIE;
                        break;
                    case Score.WIN:
                        score += Play.PAPER + Score.WIN;
                }
            break;
            case Play.PAPER:
                switch(myMove) {
                    case Score.LOSE:
                        score += Play.ROCK + Score.LOSE;
                        break;
                    case Score.TIE:
                        score += Play.PAPER + Score.TIE;
                        break;
                    case Score.WIN:
                        score += Play.SCISSORS + Score.WIN;
                }
            break;
            case Play.SCISSORS:
                switch(myMove) {
                    case Score.LOSE:
                        score += Play.PAPER + Score.LOSE;
                        break;
                    case Score.TIE:
                        score += Play.SCISSORS + Score.TIE;
                        break;
                    case Score.WIN:
                        score += Play.ROCK + Score.WIN;
                }
            break;
        }
    });

    return score;
}
console.log(getScore(completePath));

console.log(getScoreCorrectly(completePath));