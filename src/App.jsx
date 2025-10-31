import { useState } from 'react'
import Start from './components/Start'
import Test from './components/Test'
import Result from './components/Result'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState('start') // 'start', 'test', 'result'
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const startTest = () => {
    setCurrentStep('test')
    setScore(0)
    setAnswers([])
  }

  const handleTestComplete = (finalScore, userAnswers) => {
    setScore(finalScore)
    setAnswers(userAnswers)
    setCurrentStep('result')
  }

  const restartTest = () => {
    setCurrentStep('start')
    setScore(0)
    setAnswers([])
  }

  return (
    <div className="app">
      {currentStep === 'start' && <Start onStart={startTest} />}
      {currentStep === 'test' && <Test onComplete={handleTestComplete} />}
      {currentStep === 'result' && (
        <Result score={score} answers={answers} onRestart={restartTest} />
      )}
    </div>
  )
}

export default App

