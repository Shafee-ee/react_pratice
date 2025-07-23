import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import JSXDemo from './components/JSXDemo';
import LogInDemo from './components/loginInDemo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Practice Hub</h1>


      <nav>
        <Link to="\jsx" element={<JSXDemo />}><button>Learn JSX</button></Link>
        <Link to="\logIn" element={<LogInDemo />}><button>Log in Demo</button></Link>

      </nav>

      <Routes>
        <Route path="/jsx" element={<JSXDemo name="shafee" luckyNumber={7} />} />
        <Route path="/login" element={<JSXDemo isLoggedIn={isLoggedIn} />} />

      </Routes>
    </div>
  )
}

export default App
