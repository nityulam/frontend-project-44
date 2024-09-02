const getRandomNumber = (min = 0, max = 100) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};
export default getRandomNumber;
