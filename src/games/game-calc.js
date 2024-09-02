import generalLogicForGames from '../index.js';
import getRandomNumber from '../random-number.js';

const ruleOfGame = 'What is the result of the expression?';

const getMathematicalOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = getRandomNumber(0, operators.length);
  return operators[randomIndex];
};

const creatingExpressionForQuestion = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;

    default:
  }
  return result;
};

const passingNecessaryElements = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operator = getMathematicalOperator();
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = creatingExpressionForQuestion(num1, num2, operator);
  return [question, String(rightAnswer)];
};

const getQuestionAndCorrectAnswer = () => {
  const [question, rightAnswer] = passingNecessaryElements();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndCorrectAnswer);
};
