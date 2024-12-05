import { useState } from "react"

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = (operation) => {
    switch (operation) {
      case "plus":
        setCounter(counter+1)
        break;
      case "minus":
        if (counter>0){
          setCounter(counter-1)
        }
        break;
      case "reset":
        setCounter(0)
      default:
        break;
    }
  }
  
  return (
    <div>
      <p>{counter}</p>
      <Button handleClick={()=> handleClick("plus")} text="plus" />
      <Button handleClick={()=> handleClick("minus")} text ="minus" />
      <Button handleClick = {()=> handleClick("reset")} text ="reset" />
    </div>
  )
}
export default App