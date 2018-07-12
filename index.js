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

function question() {
  let q;
  let count;
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
    if (isUppercase(q)) {
      const year = getRandomValue(1930, 1950);
      print(`NO, NOT SINCE ${year}`);
    } else {
      print('HUH?! SPEAK UP, SONNY!');
    }
  } while (true);
}
print('What do you want to say to Grandma!!');
question();
