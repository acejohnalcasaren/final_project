import "./App.css";

import Board from "./Board";

export default function App() {
  return (
    <div className="App">
      <h1>Let's play Snake & Ladder Game</h1>
      <section>
        <div className="info-tips">
          <span className="alert"></span>
          <p>Snake Bite Point</p>
        </div>
        <div className="info-tips">
          <span className="success"></span>
          <p>Ladder Point</p>
        </div>
        <div className="info-tips">
          <span className="pulser"></span>
          <p>Active Point</p>
        </div>
      </section>
      <Board />
    </div>
  );
}
