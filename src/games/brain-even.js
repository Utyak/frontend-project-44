const isEven = (num) => num % 2 === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const MIN_NUM = 1;
const MAX_NUM = 100;

const game = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: () => {
    const question = getRandomInt(MIN_NUM, MAX_NUM);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export default game;
