import generalLogicForGames from '../index.js';

const ruleOfGame = 'What number is missing in the progression?';

const randomNumber = (min, max = 100) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

const arithmeticProgression = () => {
  const arrayLength = randomNumber(4, 10);

  // Немного длинная переменная :))) (понимаю что не очень хороший вариант)
  let beginningOfArrayWithItsSubsequentIncrease = randomNumber(0, 50);
  const stepIncreasingProgression = randomNumber(2, 11);
  const arrayOfArithProgression = [];

  // console.log('Шаг прогрессии', stepIncreasingProgression);

  for (let i = 0; i <= arrayLength; i += 1) {
    beginningOfArrayWithItsSubsequentIncrease += stepIncreasingProgression;
    arrayOfArithProgression.push(beginningOfArrayWithItsSubsequentIncrease);
  }

  const indexArrayBeReplaced = randomNumber(0, arrayOfArithProgression.length);
  const hiddenArrayElement = arrayOfArithProgression[indexArrayBeReplaced];
  arrayOfArithProgression[indexArrayBeReplaced] = '..';

  /*
  console.log(
    typeof arrayOfArithProgression,
    arrayOfArithProgression.join(' ')
  );
  */

  // console.log('Индексный массив должен быть заменен', indexArrayBeReplaced);
  // console.log('Скрытый элемент массива', hiddenArrayElement);

  return [arrayOfArithProgression.join(' '), String(hiddenArrayElement)];
};

const correctAnswer = () => {
  const [question, rightAnswer] = arithmeticProgression();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, correctAnswer);
};
