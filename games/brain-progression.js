const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 15;
const MIN_STEP = 1;
const MAX_STEP = 10;

const game = {
  description: 'What number is missing in the progression?',
  round: () => {
    const length = getRandomInt(MIN_LENGTH, MAX_LENGTH);
    const start = getRandomInt(MIN_START, MAX_START);
    const step = getRandomInt(MIN_STEP, MAX_STEP);
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = new Array(length)
      .fill(start)
      .map((num, index) => {
        if (index === hiddenIndex) return '..';
        return num + step * index;
      });

    const question = progression.join(' ');
    const correctAnswer = (start + step * hiddenIndex).toString();

    return {
      question,
      correctAnswer,
    };
  },
};

export default game;