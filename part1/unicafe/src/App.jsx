import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}


const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text='good' value={good} /></td>
            </tr>

            <tr>
              <td><StatisticLine text='neutral' value={neutral} /></td>
            </tr>

            <tr>
              <td><StatisticLine text='bad' value={bad} /></td>
            </tr>

            <tr>
              <td><StatisticLine text='all' value={all} /></td>
            </tr>

            <tr>
              <td><StatisticLine text='average' value={average} /></td>
            </tr>

            <tr>
              <td><StatisticLine text='positive' value={`${positive}%`} /></td>
            </tr>

          </tbody>
        </table>

      </div>

    )
  }

}







const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  let updatedAll = 0
  let updatedAverage = 0
  let updatedPositive = 0


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    updatedAll = updatedGood + neutral + bad
    setAll(updatedAll)
    updatedAverage = (updatedGood - bad) / updatedAll
    setAverage(updatedAverage)
    updatedPositive = updatedGood / updatedAll * 100
    setPositive(updatedPositive)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    updatedAll = updatedNeutral + good + bad
    setAll(updatedAll)
    updatedAverage = (good - bad) / updatedAll
    setAverage(updatedAverage)
    updatedPositive = good / updatedAll * 100
    setPositive(updatedPositive)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    updatedAll = updatedBad + good + neutral
    setAll(updatedAll)
    updatedAverage = (good - updatedBad) / updatedAll
    setAverage(updatedAverage)
    updatedPositive = good / updatedAll * 100
    setPositive(updatedPositive)
  }




  return (
    <div>
      <Title title='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <Title title='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />





    </div>
  )
}

export default App;