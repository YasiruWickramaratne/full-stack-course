import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button type='button' onClick={onClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad

  if (total == 0) {
    return <p>No feedback given</p>
  }

  const average = ((good - bad) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1) + ' %'

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(prevGood => prevGood + 1)} text='good'></Button>
      <Button onClick={() => setNeutral(preNeutral => preNeutral + 1)} text='neutral'></Button>
      <Button onClick={() => setBad(prevBad => prevBad + 1)} text='bad'></Button>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

    </div>
  )
}

export default App