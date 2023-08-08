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

const game = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  round: () => {
    const number = Math.floor(Math.random() * 100);
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return {
      question,
      correctAnswer,
    };
  },
};

export default game;