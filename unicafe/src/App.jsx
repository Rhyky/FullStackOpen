import { useState } from 'react'

const Statistics = (props) => { 
  const statAll = props.go + props.ba + props.neu  
  const average = ((props.go-props.ba)/statAll)
  const positive = ((props.go/statAll)*100)

  return (
    <div>
      <div>all {statAll}</div> 
      <div>average {average}</div> 
      <div>positive {positive} %</div> 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const go = good+1
    setGood(go)    
  }
  const handleNeutral = () => {
    const neu = neutral+1
    setNeutral(neu)    
  }
  const handleBad = () => {
    const ba = bad+1
    setBad(ba)    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div> 
      
      <Statistics go={good} neu={neutral} ba={bad}/>

    </div>
  )
}

export default App