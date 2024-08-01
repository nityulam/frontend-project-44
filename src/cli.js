import readlineSync from 'readline-sync';

const findOutName = () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  //console.log('Hello, !');
};

export { findOutName };
