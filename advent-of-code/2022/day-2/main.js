"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var functions_1 = require("../functions");
var relativePath = "./input.txt";
var completePath = path.resolve(__dirname, relativePath);
var Score;
(function (Score) {
    Score[Score["WIN"] = 6] = "WIN";
    Score[Score["TIE"] = 3] = "TIE";
    Score[Score["LOSE"] = 0] = "LOSE";
})(Score || (Score = {}));
var Play;
(function (Play) {
    Play[Play["ROCK"] = 1] = "ROCK";
    Play[Play["PAPER"] = 2] = "PAPER";
    Play[Play["SCISSORS"] = 3] = "SCISSORS";
})(Play || (Play = {}));
var oppMoveMap = new Map();
oppMoveMap.set('A', Play.ROCK);
oppMoveMap.set('B', Play.PAPER);
oppMoveMap.set('C', Play.SCISSORS);
var myHandMap = new Map();
myHandMap.set('X', Score.LOSE);
myHandMap.set('Y', Score.TIE);
myHandMap.set('Z', Score.WIN);
function getScore(file) {
    var lines = (0, functions_1.ReadFile)(file);
    var score = 0;
    lines.forEach(function (element) {
        var round = element.split(' ');
        var opponentMove = oppMoveMap.get(round[0]);
        var myMove = round[1];
        switch (opponentMove) {
            case Play.ROCK:
                switch (myMove) {
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
                switch (myMove) {
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
                switch (myMove) {
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
function getScoreCorrectly(file) {
    var lines = (0, functions_1.ReadFile)(file);
    var score = 0;
    lines.forEach(function (element) {
        var round = element.split(' ');
        var opponentMove = oppMoveMap.get(round[0]);
        var myMove = myHandMap.get(round[1]);
        switch (opponentMove) {
            case Play.ROCK:
                switch (myMove) {
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
                switch (myMove) {
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
                switch (myMove) {
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
