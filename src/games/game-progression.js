import generalLogicForGames from '../index.js';
import getRandomNumber from '../random-number.js';

const ruleOfGame = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  const lengthProgression = getRandomNumber(4, 10);

  let beginningOfArrayWithItsSubsequentIncrease = getRandomNumber(0, 50);
  const stepIncreasingProgression = getRandomNumber(2, 11);
  const arrayOfArithProgression = [];

  for (let i = 0; i <= lengthProgression; i += 1) {
    beginningOfArrayWithItsSubsequentIncrease += stepIncreasingProgression;
    arrayOfArithProgression.push(beginningOfArrayWithItsSubsequentIncrease);
  }

  const indexArrayBeReplaced = getRandomNumber(0, arrayOfArithProgression.length);
  const hiddenArrayElement = arrayOfArithProgression[indexArrayBeReplaced];
  arrayOfArithProgression[indexArrayBeReplaced] = '..';

  return [arrayOfArithProgression.join(' '), String(hiddenArrayElement)];
};

const getQuestionAndCorrectAnswer = () => {
  const [question, rightAnswer] = getArithmeticProgression();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, getQuestionAndCorrectAnswer);
};
