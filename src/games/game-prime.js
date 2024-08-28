import generalLogicForGames from '../index.js';

// Не могу разобратся почему при сохранении, автоматически переносит текст на другую строку.
// Какое правило описывает данное поведение?
const ruleOfGame =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = (min = 2, max = 100) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

const findingPrimeNumber = () => {
  const numberRepresented = randomNumber();
  // console.log('Проверяемое число', numberRepresented, typeof numberRepresented);

  let result;

  for (let i = 2; i < numberRepresented; i += 1) {
    if (numberRepresented % i === 0) {
      result = 'no';
      return [numberRepresented, result];
    }
  }
  // Туплю. Как вывести result = 'yes' выше, чтоб он небыл на одном уровне с return.
  // Если вывожу, то 2 не проходит проверку на простое число
  return [numberRepresented, (result = 'yes')];
};

const correctAnswer = () => {
  const [question, rightAnswer] = findingPrimeNumber();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, correctAnswer);
};
