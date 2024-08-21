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
/*
const userAnswer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    const calculatingRemainder = randomNumber % 2;

    const answer = readlineSync.question('Your answer: ');
    if (calculatingRemainder === 0 && answer.toLowerCase() === 'yes') {
      console.log('Correct!');
    } else if (calculatingRemainder !== 0 && answer.toLowerCase() === 'no') {
      console.log('Correct!');
    } else if (calculatingRemainder === 0 && answer.toLowerCase() !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if (calculatingRemainder !== 0 && answer.toLowerCase() !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};


*/
