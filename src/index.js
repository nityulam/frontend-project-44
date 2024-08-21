import readlineSync from 'readline-sync';

// ruleOfGame - показываем правило игры (правило прописываем в файле с конкретной игрой)
// correctAnswer содержит в себе две константы:
// 1. question - цифру (цифра является вопросом) 2. rightAnswer - правильный ответ

const generalLogicForGames = (ruleOfGame, correctAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(ruleOfGame);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = correctAnswer();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase().replaceAll(' ', '') === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generalLogicForGames;
