import generalLogicForGames from '../index.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randNum) => randNum % 2 === 0;

const randomNumber = () => {
  const result = Math.floor(Math.random() * 100);
  return result;
};

const correctAnswer = () => {
  const question = randomNumber();
  const rightAnswer = isEven(question) === true ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, correctAnswer);
};
