import { useState } from 'react'
import { questions } from '../data/questions'
import './Test.css'

function Test({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswerSelect = (optionId) => {
    if (showExplanation) return

    const isCorrect = currentQuestion.options.find(
      (opt) => opt.id === optionId
    )?.isCorrect

    const newAnswers = [...selectedAnswers, { questionId: currentQuestion.id, optionId, isCorrect }]
    setSelectedAnswers(newAnswers)
    
    // 정답 선택 후 바로 다음 문제로 이동
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setShowExplanation(false)
      } else {
        // 테스트 완료
        const finalScore = newAnswers.filter((a) => a.isCorrect).length
        onComplete(finalScore, newAnswers)
      }
    }, 300) // 짧은 딜레이로 선택 피드백 제공
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
    } else {
      // 테스트 완료
      const finalScore = selectedAnswers.filter((a) => a.isCorrect).length
      onComplete(finalScore, selectedAnswers)
    }
  }

  return (
    <div className="test-container">
      <div className="test-header">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="question-number">
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="test-content">
        <div className="question-box">
          {currentQuestion.image && (
            <div className="question-image-container">
              <img 
                src={encodeURI(currentQuestion.image)} 
                alt="문제 이미지" 
                className="question-image"
                onError={(e) => {
                  console.error('이미지 로드 실패:', currentQuestion.image);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('이미지 로드 성공:', currentQuestion.image);
                }}
              />
            </div>
          )}
          <h2 className="question-text">{currentQuestion.question}</h2>
        </div>

        <div className="options-container">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswers[currentQuestionIndex]?.optionId === option.id
            // const showResult = showExplanation && isSelected // explanation 사용 안 함
            const isCorrect = option.isCorrect

            return (
              <button
                key={option.id}
                className={`option-button ${
                  isSelected
                    ? isCorrect
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={showExplanation}
              >
                <span className="option-label">{option.id.toUpperCase()}</span>
                <span className="option-text">{option.text}</span>
                {isSelected && (
                  <span className="option-icon">
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Explanation 박스 - 주석 처리됨
        {showExplanation && (
          <div className="explanation-box">
            <p className="explanation-text">
              {currentQuestion.explanation}
            </p>
            <button className="next-button" onClick={handleNext}>
              {currentQuestionIndex < questions.length - 1
                ? '다음 문제 →'
                : '결과 보기 ✨'}
            </button>
          </div>
        )}
        */}
      </div>
    </div>
  )
}

export default Test

