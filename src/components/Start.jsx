import './Start.css'

function Start({ onStart }) {
  return (
    <div className="start-container">
      <div className="start-content">
        <div className="start-emoji">🎭</div>
        <h1 className="start-title">2025 밈잘알 테스트</h1>
        <p className="start-description">
          당신은 2025년 한국 인터넷 밈을 얼마나 잘 알고 계신가요?
          <br />
          총 12문제로 실력을 확인해보세요! 🔥
        </p>
        <button className="start-button" onClick={onStart}>
          테스트 시작하기 ✨
        </button>
        <div className="start-footer">
          <p>10대~20대를 위한 밈 테스트</p>
        </div>
      </div>
    </div>
  )
}

export default Start

