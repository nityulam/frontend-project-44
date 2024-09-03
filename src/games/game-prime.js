import generalLogicForGames from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber();
  const rightAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndCorrectAnswer);
};
