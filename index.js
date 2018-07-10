/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */

let q;
let count;
function question() {
  do {
    q = prompt();
    if (q === 'BYE') {
      count += 1;
      if (count === 3) {
        break;
      }
    }
    if (q !== 'BYE') {
      count = 0;
    }
    const r1 = isUppercase(q);
    if (r1) {
      const year = getRandomValue(1930, 1950);
      print('NO, NOT SINCE '.concat(year));
    } else {
      print('HUH?! SPEAK UP, SONNY!');
    }
  } while (true);
}
print('What do you want to say to Grandma!!');
question();
