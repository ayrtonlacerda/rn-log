"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
var log = console.log;
/**
 *  Print a json in terminal
 * @argument color of background, default in black;
 *    @example
     log.json({
        a: 'ayrton',
        b: 'lacerda',
      })
 */
function json(json, color) {
    return log(colors_1.default.bg[color || 'black'] + " \n\n \uD83D\uDCEC \uD83D\uDCEC \uD83D\uDCEC JSON \uD83D\uDCEC \uD83D\uDCEC \uD83D\uDCEC \n\n", JSON.stringify(json, null, 3) + " " + colors_1.default.reset + "\n", " \n\n");
}
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function info(txt, conditional) {
    if (conditional)
        return log(colors_1.default.fg.cyan + "\u2139\uFE0F  " + txt + "  " + colors_1.default.reset + "\n\n");
    if (conditional === undefined)
        return log(colors_1.default.fg.cyan + "\u2139\uFE0F  " + txt + "  " + colors_1.default.reset + "\n\n");
}
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function warning(txt, conditional) {
    if (conditional)
        return log(colors_1.default.fg.yellow + "\u26A0\uFE0F  " + txt + "  " + colors_1.default.reset + "\n\n");
    if (conditional === undefined)
        return log(colors_1.default.fg.yellow + "\u26A0\uFE0F  " + txt + "  " + colors_1.default.reset + "\n\n");
}
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function error(txt, conditional) {
    if (conditional)
        return log(colors_1.default.bg.red + "\uD83C\uDD98  " + txt + "  " + colors_1.default.reset + "\n\n");
    if (conditional === undefined)
        return log(colors_1.default.bg.red + "\uD83C\uDD98  " + txt + "  " + colors_1.default.reset + "\n\n");
}
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function success(txt, conditional) {
    if (conditional)
        return log(colors_1.default.fg.green + "\u2705  " + txt + "  " + colors_1.default.reset + "\n\n");
    if (conditional === undefined)
        return log(colors_1.default.fg.green + "\u2705  " + txt + "  " + colors_1.default.reset + "\n\n");
}
exports.default = {
    info: info,
    json: json,
    warning: warning,
    error: error,
    success: success,
};
