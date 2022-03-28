import React, {useState} from 'react'

const Button = ({title, button_click}) => {
  return (
    <button onClick={button_click}>{title}</button>
  )
}

const Statistics= ({title, value}) => {
  if(title==="positive") {
  return (
    <tr>
      <td>{title}</td>
      <td>{value}%</td>
    </tr>
  )
}
  return (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [all,setAll] = useState(0)

  const increment_good = () => {setGood(good + 1); setAll(all + 1);}
  const increment_neutral = () => {setNeutral(neutral + 1); setAll(all + 1);}
  const increment_bad = () => {setBad(bad + 1); setAll(all + 1);}

  if(all===0)
  {
    return (
      <div>
        <h1>give feedback</h1>
        <Button title="good" button_click={increment_good} />
        <Button title="neutral" button_click={increment_neutral} />
        <Button title="bad" button_click={increment_bad} />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" button_click={increment_good} />
      <Button title="neutral" button_click={increment_neutral} />
      <Button title="bad" button_click={increment_bad} />
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics title="good" value={good}/>
          <Statistics title="neutral" value={neutral} />
          <Statistics title="bad" value={bad} />
          <Statistics title="all" value={all} />
          <Statistics title="average" value={(good - bad) / all} />
          <Statistics title="positive" value={(good / all ) * 100} />
        </tbody>
      </table>
    </div>
  );

}

export default App;
