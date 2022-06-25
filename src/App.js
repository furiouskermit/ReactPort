import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import Sub01 from "./routes/Sub01"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/sub01"} element={<Sub01 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;