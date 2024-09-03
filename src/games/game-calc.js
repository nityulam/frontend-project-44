import generalLogicForGames from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'What is the result of the expression?';

const getMathematicalOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = getRandomNumber(0, operators.length);
  return operators[randomIndex];
};

const getExpressionForQuestion = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operator = getMathematicalOperator();
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = getExpressionForQuestion(num1, num2, operator);
  return [question, String(rightAnswer)];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndAnswer);
};
