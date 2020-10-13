/* eslint-disable no-console */

import Character from './Character';
import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

try {
  const character = new Character('character', 'Magician');
  console.log(character);
} catch (error) {
  console.error(error.message);
}

try {
  const bowerman = new Bowerman('bowerman');
  console.log(bowerman);
} catch (error) {
  console.error(error.message);
}

try {
  const swordsman = new Swordsman('swordsman');
  console.log(swordsman);
} catch (error) {
  console.error(error.message);
}

try {
  const magician = new Magician('magician');
  console.log(magician);
} catch (error) {
  console.error(error.message);
}

try {
  const undead = new Undead('undead');
  console.log(undead);
} catch (error) {
  console.error(error.message);
}

try {
  const zombie = new Zombie('zombie');
  console.log(zombie);
} catch (error) {
  console.error(error.message);
}

try {
  const daemon = new Daemon('daemon');
  console.log(daemon);
} catch (error) {
  console.error(error.message);
}

try {
  const daemon = new Daemon();
  console.log(daemon);
} catch (error) {
  console.error(error.message);
}

try {
  const character = new Character('character', 'Magician2');
  console.log(character);
} catch (error) {
  console.error(error.message);
}
