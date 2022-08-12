import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";

function App() {
  return (
    <div className="container">
      <h1>POMODORO</h1>
      <small>Soyez productif </small>
      <SetPomodoro />
      {/* <CountdownAnimation>
        cedr
      </CountdownAnimation> */}
    </div>
  );
}

export default App;
