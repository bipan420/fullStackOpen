import { useState } from "react"

const Heading = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}
const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <table>
      <thead>
        
      </thead>
      <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({good, neutral, bad, all, calcAvg, calcPositive}) => {
  if (good+neutral+bad===0)return <p>No feedback given</p>
  return (
    <>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={calcAvg} />
    <StatisticLine text="positive" value={calcPositive} />
    </>
  )
}

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good:0,
    neutral:0,
    bad:0,
    all:0
  })
  const feedbackHeading = "give feedback"
  const statHeading = "statistics"

  //for this you will have to create function inside the handler
  // const incByOne = (feedback) => {
  //   setFeedbacks((prevFeedbacks) => ({
  //     ...prevFeedbacks,
  //     [feedback]: prevFeedbacks[feedback] + 1,
  //   }))
  // } 

  //for this, you can call the function inside the handler
  
  const incByOne = (feedback) => () => {
    return setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedback]: prevFeedbacks[feedback] + 1,
      all: prevFeedbacks.all + 1,
    }))
  }

  //for this, you can call the function inside the handler
//Note: inside setFeedbacks, if you are to explicitly write return then you don' need to use rounded brackets.
  // const incByOne = (feedback) => () => {
  //   return setFeedbacks((prevFeedbacks) => {
  //     return {...prevFeedbacks, feedback: prevFeedbacks[feedback] + 1}
  //   })
  // }

  const calculateAverage = () => {
    const {good, neutral, bad, all} = feedbacks
    if (all === 0) return 0
    const avg = (good * 1 + neutral * 0 + bad * -1) / all
    return avg
  }

  const calculatePositive = () => {
    const {good, all} = feedbacks
    if (all===0 || good===0) return 0
    const positive = ((good)/(all)) * 100 + " %"
    return positive
  }

return (
  <div>
    <Heading text={feedbackHeading} />
    <Button onClick={incByOne("good")} text="good" />
    <Button onClick={incByOne("neutral")} text="neutral" />
    <Button onClick={incByOne("bad")} text="bad" />
    <Heading text={statHeading} />
    <Statistics good={feedbacks.good} neutral={feedbacks.neutral} bad={feedbacks.bad} all={feedbacks.all} calcAvg={calculateAverage()} calcPositive={calculatePositive()}/>
  </div>
)
}
export default App