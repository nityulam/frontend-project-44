import generalLogicForGames from '../index.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const randomNumber = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

const randomNumbers = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const minNum = Math.min(num1, num2);

  const mathcExpressio = `${num1} ${num2}`;
  let result;

  for (let i = minNum; i > 0; i -= 1) {
    const mathOperation = num1 % i;
    const mathOperation2 = num2 % i;
    // console.log('minNum =', minNum, 'i =', i, 'num1 =', num1, 'num2 =', num2);
    // console.log('mathOper =', mathOperation, 'mathOper2 =', mathOperation2);
    if (mathOperation === 0 && mathOperation2 === 0) {
      result = i;
      // У result изменил тип на строковый, в связи с тем, что даваемый ответ игроком,
      // является строковым типом. Как сделать иначе не разобрался.
      return [mathcExpressio, String(result)];
    }
    result = 0;
  }
  return [mathcExpressio, String(result)];
};

const correctAnswer = () => {
  const [question, rightAnswer] = randomNumbers();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, correctAnswer);
};
