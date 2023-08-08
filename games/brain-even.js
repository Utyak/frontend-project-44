#!/usr/bin/env node
const isEven = (num) => num % 2 === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const game = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: () => {
    const question = getRandomInt(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export default game;
