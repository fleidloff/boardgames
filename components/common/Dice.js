import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default function Dice({ numDice = 2, rollDone, ref }) {

  return <ReactDice
      numDice={2}
      rollDone={rollDone}
      ref={ref}
    />
}
