const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const game = {
  description: 'What number is missing in the progression?',
  round: () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 15);
    const step = getRandomInt(1, 10);
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
