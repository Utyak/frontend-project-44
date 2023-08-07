#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playGame = (name, rounds = 3) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && answer === 'yes') || (!isEven(randomNumber) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(randomNumber) ? 'yes' : 'no'}.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { isEven, playGame };
