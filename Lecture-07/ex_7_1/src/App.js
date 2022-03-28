import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1) + setAll(all + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1) + setAll(all + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1) + setAll(all + 1)}>Bad</button>
      <h1>statistics</h1>
      Good: {good} <br/>
      Neutral: {neutral} <br/>
      Bad: {bad} <br/>
      all: {all} <br/>
      average: {((good-bad) / all).toFixed(2)} <br/>
      positive: {((good/bad) * 100).toFixed(2)}% <br/>
    </div>
  )
}

export default App