import getRandomInt from '../utils.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 15;
const MIN_STEP = 1;
const MAX_STEP = 10;

const generateProgression = (startValue, step, length) => new Array(length)
  .fill(startValue)
  .map((num, index) => num + step * index);

const game = {
  description: 'What number is missing in the progression?',
  round: () => {
    const length = getRandomInt(MIN_LENGTH, MAX_LENGTH);
    const startValue = getRandomInt(MIN_START, MAX_START);
    const step = getRandomInt(MIN_STEP, MAX_STEP);
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = generateProgression(startValue, step, length);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';

    const question = progression.join(' ');

    return {
      question,
      correctAnswer,
    };
  },
};

export default game;
