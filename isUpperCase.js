/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let i = 0;

  const regex = /[a-z]/;
  for (i = 0; i < s.length; i += 1) {
    if (regex.test(s[i])) {
      return false;
    }
  }
  return true;
};
module.exports = isUppercase;
