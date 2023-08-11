import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];
const MIN_NUM = 1;
const MAX_NUM = 25;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Error';
  }
};

const game = {
  description: 'What is the result of the expression?',
  round: () => {
    const num1 = getRandomInt(MIN_NUM, MAX_NUM);
    const num2 = getRandomInt(MIN_NUM, MAX_NUM);
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator).toString();

    return {
      question,
      correctAnswer,
    };
  },
};

export default game;
