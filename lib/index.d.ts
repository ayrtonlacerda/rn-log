/**
 *  Print a json in terminal
 * @argument color of background, default in black;
 *    @example
     log.json({
        a: 'ayrton',
        b: 'lacerda',
      })
 */
declare function json(json: Object, color?: string): void;
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
declare function info(txt: string, conditional?: boolean): void;
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
declare function warning(txt: string, conditional?: boolean): void;
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
declare function error(txt: string, conditional?: boolean): void;
/**
 *
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
declare function success(txt: string, conditional?: boolean): void;
declare const _default: {
    info: typeof info;
    json: typeof json;
    warning: typeof warning;
    error: typeof error;
    success: typeof success;
};
export default _default;
