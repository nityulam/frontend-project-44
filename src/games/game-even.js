import generalLogicForGames from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (randNum) => randNum % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNumber();
  const rightAnswer = isEvenNumber(question) === true ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndCorrectAnswer);
};
