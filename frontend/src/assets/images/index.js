import character1 from './character1.png';
import character2 from './character2.png';
import character3 from './character3.png';
import character4 from './character4.png';
import closeIcon from './close.png';

const characters = [character1, character2, character3, character4];
const getRandomCharacter = () => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};

export {
  character1,
  character2,
  character3,
  character4,
  characters,
  closeIcon,
  getRandomCharacter
};
