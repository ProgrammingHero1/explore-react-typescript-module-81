import "./App.css";
import Component from "./Component";

function App() {
  return (
    <div className="App">
      <Component name="Component" />
      <Component name="Component">
        <h1>Hello</h1>
      </Component>
    </div>
  );
}

export default App;
