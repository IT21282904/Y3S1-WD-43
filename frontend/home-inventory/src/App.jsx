import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" elment={<Root />}/>
          <Route path="/login" exact element={<LoginForm/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
