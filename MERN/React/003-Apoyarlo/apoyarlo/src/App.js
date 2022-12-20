import "./App.css";

function App(props) {
  const { lastName, firstName, age, hairColor } = props.user;
  return (
    <div className="App">
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
}

export default App;
