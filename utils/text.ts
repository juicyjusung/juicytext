import { isEmptyLine } from '~/store/textModule';

/**
 *
 * @param {string[]} keywords
 * @param {boolean} caseInsensitive
 * @returns {RegExp[]}
 */
export const keywordsRegexArr = (keywords: string[], caseInsensitive: boolean = true): RegExp[] => {
  return keywords.map(keyword =>
    caseInsensitive ? new RegExp(keyword || '\n', 'gi') : new RegExp(keyword || '\n', 'g')
  );
};

/**
 *
 * @param {RegExp[]} regexArr
 * @param {string} text
 * @param {(matchedCb: string) => string} matchedCb
 * @returns {string}
 */
export const regexArrReplacer = (
  regexArr: RegExp[],
  text: string,
  matchedCb: (matchedCb: string) => string
) => {
  return regexArr.reduce((acc, cur) => {
    return acc.replace(cur, matchedCb);
  }, text);
};

export const removeEmptyLines = (text: string | string[]) => {
  if (typeof text === 'string') {
    return text.split('\n').filter(line => !isEmptyLine(line));
  } else {
    return text.filter(line => !isEmptyLine(line));
  }
};
