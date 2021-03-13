import { useState } from "react";
import Head from 'next/head'
import styles from '../../styles/games/Zombiedice.module.css'
import dynamic from 'next/dynamic'

const Dice = dynamic(() => import('../../components/common/Dice'))

let dice;
let roll = () => {
  console.log("dice", dice);
  dice && dice.retry();
}

export default function Home() {
console.log("roll", roll)
  return (
    <div className={styles.container}>
      <Head>
        <title>Zombie Dice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Zombie Dice
        </h1>

        <button onClick={roll}>roll</button>
        <Dice
          numDice={2}
          rollDone={(num) => console.log("rolled " + num)}
          ref={d => dice = d}
        />

      </main>
    </div>
  )
}
