import readlineSync from 'readline-sync';
// import randomNumber from './random-number.js';

// const findOutName можно убрать, а в исполняемый файл добавить импорт из файла cli.js

/* const findOutName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
*/
/* const findEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
*/
// const currentNumber = randomNumber;

/* const showingNumber = () => {
  console.log(`Question: ${currentNumber}`);
};
*/
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

export {
  /* findOutName, */ /* findEvenNumber, */ /* showingNumber, */ userAnswer,
};
