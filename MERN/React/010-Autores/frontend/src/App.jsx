import "./App.css";
import FormAuthor from "./pages/AddAuthor";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import AuthorDetail from "./pages/AuthorDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Authors Manager</h1>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newauthor" element={<FormAuthor />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:id" element={<AuthorDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
