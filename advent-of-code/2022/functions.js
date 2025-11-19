"use strict";
exports.__esModule = true;
exports.ReadFile = void 0;
var fs = require("fs");
function ReadFile(route) {
    var content = fs.readFileSync(route, 'utf-8');
    var lines = content.split(/\r?\n/);
    return lines;
}
exports.ReadFile = ReadFile;
