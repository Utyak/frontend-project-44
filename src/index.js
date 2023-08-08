import readlineSync from 'readline-sync';

const playGame = (game, name, rounds = 3) => {
  console.log(game.description);

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = game.round();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
