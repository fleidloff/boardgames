import Head from 'next/head';
import React from 'react';

import { useDice, useDie } from '../../components/common/Dice';
import styles from '../../styles/games/Zombiedice.module.css';

export default function ZombieDice() {
  const [{ value }, { roll }, Die] = useDie();
  const [{ values }, { roll: rollCollection }, Dice] = useDice({ amount: 6 });
  const sum = values.reduce((memo, it) => memo + parseInt(it, 10), 0);

  const die1 = useDie();
  const die2 = useDie({ values: ['A', 'B', 'C'], value: 'A' });
  const [_, { roll: rollCollection2 }, Dice2] = useDice({ dice: [die1, die2] });

  return (
    <div className={styles.container}>
      <Head>
        <title>Zombie Dice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Zombie Dice (
          {value}
          )
        </h1>

        <button onClick={roll}>roll</button>
        <Die />

        <h2>
          Dice Collection(
          {sum}
          )
        </h2>

        <button onClick={rollCollection}>roll</button>
        <div className={styles.dice}>
          <Dice />
        </div>

        <h2>Dice Collection2</h2>

        <button onClick={rollCollection2}>roll</button>
        <div className={styles.dice}>
          <Dice2 />
        </div>
      </main>
    </div>
  );
}
