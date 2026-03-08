import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => { 
  const statAll = good + bad + neutral  
  const average = ((good-bad)/statAll)
  const positive = ((good/statAll)*100)

  if(good==0 && neutral==0 && bad==0){
    return (
      <div>
        <h1>statistics</h1>        
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>  
      <h1>statistics</h1>
      <table>
      <StatisticsLine text={"good"} value={good}/>
      <StatisticsLine text={"neutral"} value={neutral}/>
      <StatisticsLine text={"bad"} value={bad}/>

      <StatisticsLine text={"all"} value={statAll}/>
      <StatisticsLine text={"average"} value={average}/>
      <StatisticsLine text={"positive"} value={positive} valueType={'%'}/>
      </table>
    </div>
  )
}

const StatisticsLine =({text, value, valueType})=>{
  return (   
    <tr>
      <td>{text}</td>
      <td>{value} {valueType}</td>    
    </tr>
  )  
}

const Button = ({onClick, text}) =>{
  return ( 
      <button onClick={onClick}>
        {text}
      </button> 
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
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}
      />


    </div>
  )
}

export default App