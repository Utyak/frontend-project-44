const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const MIN_NUM = 1;
const MAX_NUM = 100;

const game = {
  description: 'Find the greatest common divisor of given numbers.',
  round: () => {
    const num1 = getRandomInt(MIN_NUM, MAX_NUM);
    const num2 = getRandomInt(MIN_NUM, MAX_NUM);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();

    return {
      question,
      correctAnswer,
    };
  },
};

export default game;
