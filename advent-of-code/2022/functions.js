"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFile = ReadFile;
var fs = require("fs");
function ReadFile(route) {
    var content = fs.readFileSync(route, 'utf-8');
    var lines = content.split(/\r?\n/);
    return lines;
}
