import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGood = () => {
    const go = good+1
    setGood(go)
    updateStats(go, neutral, bad)
  }
  const handleNeutral = () => {
    const neu = neutral+1
    setNeutral(neu)
    updateStats(good, neu, bad)
  }
  const handleBad = () => {
    const ba = bad+1
    setBad(ba)
    updateStats(good, neutral, ba)
  }

  const updateStats = (go, neu, ba) => {
    const a = go+neu+ba 
    setAll(a)
    setAverage((go-ba)/a)
    setPositive((go/a)*100)
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

      <div>all {all}</div> 
      <div>average {average}</div> 
      <div>positive {positive} %</div> 
    </div>
  )
}

export default App