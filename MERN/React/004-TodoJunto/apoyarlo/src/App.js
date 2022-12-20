import "./App.css";
import { useState } from "react";

function App(props) {
  const { lastName, firstName, age, hairColor } = props.user;
  const [count, setCount] = useState(age);

  return (
    <div className="App">
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {count}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => setCount(count + 1)}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
}

export default App;
