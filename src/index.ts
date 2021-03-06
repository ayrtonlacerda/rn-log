import colors from './colors';

const log = console.log;

/**
 *  Print a json in terminal
 * @argument color of background, default in black;
 *    @example
     log.json({
        a: 'ayrton',
        b: 'lacerda',
      })
 */
function json(json: Object, color?: string): void {
  return log(
    `${colors.bg[color || 'black']} \n\n đŦ đŦ đŦ JSON đŦ đŦ đŦ \n\n`,
    `${JSON.stringify(json, null, 3)} ${colors.reset}\n`,
    ` \n\n`,
  );
}

/**
 * 
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function info(txt: string, conditional?: boolean) {
  if (conditional) return log(`${colors.fg.cyan}âšī¸  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.fg.cyan}âšī¸  ${txt}  ${colors.reset}\n\n`);
}

/**
 * 
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function warning(txt: string, conditional?: boolean) {
  if (conditional) return log(`${colors.fg.yellow}â ī¸  ${txt}  ${colors.reset}\n\n`);
  if (conditional === undefined) return log(`${colors.fg.yellow}â ī¸  ${txt}  ${colors.reset}\n\n`);
}

/**
 * 
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function error(txt: string, conditional?: boolean) {
  if (conditional) return log(`${colors.bg.red}đ  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.bg.red}đ  ${txt}  ${colors.reset}\n\n`);
}

/**
 * 
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function success(txt: string, conditional?: boolean) {
  if (conditional) return log(`${colors.fg.green}â  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.fg.green}â  ${txt}  ${colors.reset}\n\n`);
}

export default {
  info,
  json,
  warning,
  error,
  success,
};
