import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = (props) => {
  console.log(props);
  return (
    <>
    <h1>Statistics</h1>
    Good: {props.good} <br/>
    Neutral: {props.neutral} <br/>
    Bad: {props.bad} <br/>
    All: {props.all} <br/>
    Average: {((props.good-props.bad) / props.all).toFixed(1)} <br/>
    Positive: {((props.good/props.all) * 100).toFixed(1)}% <br/>
    </>
  )}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  if(all === 0){
    return (
      <div>
        <Header name = "Give feedback"/>
        <Button onClick={() => setGood(good + 1) + setAll(all + 1)} text='Good' />
        <Button onClick={() => setNeutral(neutral + 1) + setAll(all + 1)} text='Neutral'/>
        <Button onClick={() => setBad(bad + 1) + setAll(all + 1)} text='Bad'/>
      </div>
    )
  }
  
  return (
    <div>
      <Header name = "Give feedback"/>
      <Button onClick={() => setGood(good + 1) + setAll(all + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1) + setAll(all + 1)} text='Neutral'/>
      <Button onClick={() => setBad(bad + 1) + setAll(all + 1)} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App