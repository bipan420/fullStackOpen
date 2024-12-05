import { useState } from "react"

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>The app is used by pressing the buttons</div>
    )
  }

  return (
    <div>Button press history: {allClicks.join(' ')}</div>
  )
}


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
    factor: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const newClicks = {
      ...clicks,
      left: clicks.left+1
    }
    setClicks(newClicks)
    
    setTotal(newClicks.left + newClicks.right + newClicks.factor)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const newClicks = {
      ...clicks,
      right: clicks.right+1
    }
    setClicks(newClicks)
    setTotal(newClicks.left + newClicks.right + newClicks.factor)
  }

  const increaseBy = (incValue) => () => {
      const newClicks = {
        ...clicks,
        factor: clicks.factor + incValue
      }
      setClicks(newClicks)
      setTotal(newClicks.left + newClicks.right + newClicks.factor)
    }
  
  return (
    <div>
      <History allClicks={allClicks} />
      <p>{clicks.left}</p>
      <p>{clicks.right}</p>
      <p>Total {total}</p>
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      <Button onClick={increaseBy(100)} text="Increase by 100" />
      <Button onClick= {increaseBy(1000)} text="Increase by 1000" />
    </div>
  )
}
export default App