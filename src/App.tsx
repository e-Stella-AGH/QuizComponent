import './App.css';
import QuizComponent from './components/Quiz';
import QuizForm from './components/QuizForm/QuizForm';
import { api } from './services/QuizService'
import { useState, useEffect } from 'react'

function App() {

  const [quizes, setQuizes] = useState<Array<object>>([])
  const [isAdding, setIsAdding] = useState<null | boolean>(null)

  useEffect(() => {
    const result = [api.getQuiz()];
    setQuizes(result)
  }, [])

  const saveForm = (value: Object) => {
    const copyQuizes = [...quizes]
    copyQuizes.push(value)
    setQuizes(copyQuizes)
    setIsAdding(null)
  }


  if (isAdding === null) {
    return (
      <div>
        <button onClick={() => setIsAdding(true)}>Add Quiz</button>
        <button onClick={() => setIsAdding(false)}>Start Quiz</button>
      </div>
    )
  } else if (isAdding == true)
    return (<QuizForm onSubmit={saveForm} />)
  else 
    return (<QuizComponent exit={() => setIsAdding(null)} quiz={quizes[quizes.length-1]} />)
}

export default App;
