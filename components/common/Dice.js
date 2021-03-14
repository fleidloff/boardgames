import React, { useState } from 'react';

import styles from './Dice.module.css';

const VALUES = ['1', '2', '3', '4', '5', '6'];
export const STATES = {
  ROLLING: 'ROLLING',
};

export default function Die({ value = '0' } = {}) {
  return (
    <div className={styles.die}>
      {value === STATES.ROLLING ? '...' : value}
    </div>
  );
}

export function useDie({ value = '0', values = VALUES } = {}) {
  const [dieValue, setValue] = useState(value || values[0]);
  let timeout;
  function roll() {
    clearTimeout(timeout);
    setValue(STATES.ROLLING);
    timeout = setTimeout(() => setValue(values[Math.floor(Math.random() * values.length)]), 500);
  }

  function ConnectedDie() {
    return <Die value={dieValue} />;
  }

  return [{ value: dieValue }, { roll }, ConnectedDie];
}

export function useDice({
  amount = 1, value: externalValue, values: externalValues, dice: externalDice,
} = {}) {
  const dice = externalDice || Array(5).fill({}).map(() => useDie({ value: externalValue, values: externalValues }));

  function ConnectedDice() {
    return (
      <>
        {dice.map(([{ value }, _, DieComponent], i) => <DieComponent key={i} value={value} />)}
      </>
    );
  }
  function roll() {
    dice.forEach(([_, { roll: rollDie }]) => rollDie());
  }
  const values = dice.map(([{ value }]) => value);
  return [{ values }, { roll }, ConnectedDice];
}
