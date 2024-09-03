import generalLogicForGames from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  let result;
  for (let i = minNum; i > 0; i -= 1) {
    const mathOperation = num1 % i;
    const mathOperation2 = num2 % i;

    if (mathOperation === 0 && mathOperation2 === 0) {
      result = i;
      return result;
    }
    result = 0;
  }
  return result;
};

const passingNecessaryElements = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGreatestCommonDivisor(num1, num2);

  return [question, String(rightAnswer)];
};

const getQuestionAndCorrectAnswer = () => {
  const [question, rightAnswer] = passingNecessaryElements();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndCorrectAnswer);
};
