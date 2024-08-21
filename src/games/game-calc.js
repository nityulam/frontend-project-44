import generalLogicForGames from '../index.js';

const ruleOfGame = 'What is the result of the expression?';

const randomNumber = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

// Генерируем математический оператор
const randomMathOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = randomNumber(0, operators.length);
  return operators[randomIndex];
};

const randomMathcExpression = () => {
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  const operator = randomMathOperator();

  const mathcExpressio = `${num1} ${operator} ${num2}`;
  let result;

  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;

    default:
    // do nothing
  }

  // У result изменил тип на строковый, в связи с тем, что даваемый ответ игроком,
  // является строковым типом. Как сделать иначе не разобрался.
  return [mathcExpressio, String(result)];
};

const correctAnswer = () => {
  const [question, rightAnswer] = randomMathcExpression();

  return [question, rightAnswer];
};

export default () => {
  generalLogicForGames(ruleOfGame, correctAnswer);
};

/*

const calculatorGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumber1} + ${randomNumber2}`);

    const calculateMathOperation = randomNumber1 + randomNumber2;

    const answer = readlineSync.question('Your answer: ');

    if (calculateMathOperation === Number(answer)) {
      console.log('Correct!');
    } else if (calculateMathOperation !== Number(answer)) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${calculateMathOperation}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    } else {
      console.log('The answer is not correct');
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { calculatorGame };
*/
