const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const MIN_NUM = 2;
const MAX_NUM = 100;

const game = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  round: () => {
    const number = getRandomInt(MIN_NUM, MAX_NUM);
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return {
      question,
      correctAnswer,
    };
  },
};

export default game;