import { questions, results } from '../data/questions'
import './Result.css'

function Result({ score, answers, onRestart }) {
  const getResult = () => {
    for (const result of results) {
      if (score >= result.scoreRange[0] && score <= result.scoreRange[1]) {
        return result
      }
    }
    return results[0]
  }

  const result = getResult()

  return (
    <div className="result-container">
      <div className="result-content">
        <div className="result-header" style={{ background: result.color }}>
          <div className="result-emoji">{result.emoji}</div>
          <h1 className="result-title">{result.title}</h1>
          <div className="result-score">
            {score} / {questions.length}
          </div>
        </div>

        <div className="result-description">
          <p>{result.description}</p>
        </div>

        <div className="result-details">
          <h3>문제별 정답 여부</h3>
          <div className="answers-list">
            {questions.map((question, index) => {
              const answer = answers[index]
              const isCorrect = answer?.isCorrect
              const selectedOption = question.options.find(
                (opt) => opt.id === answer?.optionId
              )

              return (
                <div
                  key={question.id}
                  className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <div className="answer-number">Q{index + 1}</div>
                  <div className="answer-info">
                    <div className="answer-question">{question.question}</div>
                    <div className="answer-selected">
                      선택: {selectedOption?.text || '미선택'}
                      <span className="answer-status">
                        {isCorrect ? ' ✓' : ' ✗'}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <button className="restart-button" onClick={onRestart}>
          다시 테스트하기 🔄
        </button>
      </div>
    </div>
  )
}

export default Result

