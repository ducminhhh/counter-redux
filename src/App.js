import './style.css';

function App() {
  return (
    <div className="main">
      <h1>Counter</h1>
      <h1 id="number">0</h1>
      <div className="btnArea">
        <button className="btn decrease">DECREASE</button>
        <button className="btn reset">RESET</button>
        <button className="btn increase">INCREASE</button>
      </div>
    </div>
  );
}

export default App;
