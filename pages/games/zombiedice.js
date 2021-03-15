import Head from 'next/head';
import React from 'react';

import { useDice, useDie } from '../../components/common/Dice';
import styles from '../../styles/games/Zombiedice.module.css';

export default function ZombieDice() {
  const [{ value }, { roll }, Die] = useDie();
  const [{ values, elements }, { roll: rollCollection }] = useDice({ amount: 6 });
  const sum = values.reduce((memo, it) => memo + parseInt(it, 10), 0);

  const die1 = useDie();
  const die2 = useDie({ values: ['A', 'B', 'C'], value: 'A', style: { color: 'blue', backgroundColor: 'red' } });
  const die3 = useDie();

  const [{ elements: elements2 }, { roll: rollCollection2 }] = useDice({ dice: [die1, die2] });

  // TODO: add or remove dice to Dice Collection

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
          {elements.map(([,, ConnectedDie], i) => <ConnectedDie key={i} />)}
        </div>

        <h2>Dice Collection2</h2>

        <button onClick={rollCollection2}>roll</button>
        <div className={styles.dice}>
          {elements2.map(([,, ConnectedDie], i) => <ConnectedDie key={i} />)}
        </div>
      </main>
    </div>
  );
}
