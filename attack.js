import getRandom from './utils.js';

const $formFight = document.querySelector('.control');

const HIT = { head: 30, body: 25, foot: 20 };
const ATTACK = ['head', 'body', 'foot'];

export const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];
  return { value: getRandom(HIT[hit]), hit, defence };
};

export const playerAttack = () => {
  const attack = {};
  for (const item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }
    item.checked = false;
  }
  return attack;
};
