import { useState } from "react";

export const Formulario = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    setUsername("");
    setEmail("");
    setPassword("");
    console.log(newUser);
  };
  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={createUser}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          {username.length > 0 && username.length < 4 && (
            <p>Username need to be at least 4 characters</p>
          )}
        </div>
        <div>
          <label>Email Address: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {email.length > 0 && email.length < 4 && (
            <p>Email need to be at least 4 characters</p>
          )}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {password.length > 0 && password.length < 4 && (
            <p>Password need to be at least 4 characters</p>
          )}
        </div>
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};
