import generalLogicForGames from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'What number is missing in the progression?';

const getArithmProgression = (lengthProgression, stepProgression, firstElementOfArray) => {
  const arrayOfArithProgression = [];
  let temp = firstElementOfArray;
  for (let i = 0; i <= lengthProgression; i += 1) {
    temp += stepProgression;
    arrayOfArithProgression.push(temp);
  }
  return arrayOfArithProgression;
};

const getQuestionAndAnswer = () => {
  const lengthProgression = getRandomNumber(4, 10);
  const stepProgression = getRandomNumber(2, 11);
  const firstElementOfArray = getRandomNumber(0, 50);

  const progression = getArithmProgression(lengthProgression, stepProgression, firstElementOfArray);
  const indexArrayBeReplaced = getRandomNumber(0, progression.length);
  const rightAnswer = progression[indexArrayBeReplaced];
  progression[indexArrayBeReplaced] = '..';
  const question = progression.join(' ');

  return [question, String(rightAnswer)];
};

const getQuestionAndCorrectAnswer = () => {
  const [question, rightAnswer] = getQuestionAndAnswer();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndCorrectAnswer);
};
