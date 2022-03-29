import React,{useState} from 'react'

const Button = ({title,clickAction}) => {
  return (
    <button onClick={clickAction}>{title}</button>
  )
}

const Paragraph = ({text}) => {
  return(
    <p>{text}</p>
  )
}
const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [total_votes, setAllVotes] = useState(new Array(anecdotes.length).fill(0));

  const random_quote = () => {
    const quote_place = Math.floor(Math.random() * anecdotes.length)
    setSelected(quote_place)
  }

  const vote_points = () => {
    const vote_transf = [...total_votes]
    vote_transf[selected] += 1
    setAllVotes(vote_transf)
  }

  const max_vote = Math.max(...total_votes)
  const max_vote_quote = anecdotes[total_votes.indexOf(max_vote)]

  if (max_vote === 0) {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <Paragraph text={anecdotes[selected]} />
        <br/><br/>
        <Button title="next anecdote" clickAction={random_quote} />
        <Button title="vote" clickAction={vote_points} />
        <p>No votes yet</p>
      </div>
      )
  }

  return (
      <div>
        <h1>Anecdote of the day</h1>
        <Paragraph text={anecdotes[selected]} />
        <p>has {total_votes[selected]} votes</p>
        <Button title="next anecdote" clickAction={random_quote} />
        <Button title="vote" clickAction={vote_points} />
        <h1>Anecdote with the most votes</h1>
        <Paragraph text={max_vote_quote} />
        <p>has {max_vote} votes</p>
      </div>
  );
}

export default App;
