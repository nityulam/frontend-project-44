import generalLogicForGames from '../index.js';

// Не могу разобраться почему при сохранении, автоматически переносит текст на другую строку.
// Какое правило описывает данное поведение?
// Дело было в настройках макс длины строки Prettier (поменял в VSC)
const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = (min = 2, max = 5) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

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

const correctAnswer = () => {
  const question = randomNumber();
  const rightAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, correctAnswer);
};
