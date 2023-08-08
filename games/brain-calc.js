import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const playGame = (name, rounds = 3) => {
  console.log("What is the result of the expression?");

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInt(1, 25);
    const num2 = getRandomInt(1, 25);
    const operator = operators[getRandomInt(0, operators.length - 1)];

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question("Your answer: ");
    const correctAnswer = calculate(num1, num2, operator);

    if (!isNaN(answer) && Number(answer) === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;