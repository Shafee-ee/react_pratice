import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import JSXDemo from './components/JSXDemo';
import LogInDemo from './components/LogInDemo';
import IsVisible from './components/IsVisible';
import SimpleControlledInputs from './components/SimpleControlledInputs';
import MiniForms from './components/MiniForms';
import SiblingDemo from './components/SiblingDemo';
import './App.css'
import GrandParent from './components/GrandParent';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <h1>React Practice Hub</h1>


      <nav>
        <Link to="/jsx" element={<JSXDemo />}><button>Learn JSX</button></Link>
        <Link to="/login" element={<LogInDemo />}><button>Log in Demo</button></Link>
        <Link to="/visible" element={<IsVisible />}><button>Visible</button></Link>
        <Link to="/controlledInputs" elements={<SimpleControlledInputs />}><button>Controlled inputs</button></Link>
        <Link to="/miniForm" element={<MiniForms />}><button>Mini-Form</button></Link>
        <Link to="/SiblingDemo" element={<SiblingDemo />}><button>Sibling Demo</button></Link>
        <Link to="/grandParent" element={<GrandParent />}><button>GrandParent</button></Link >
        <Link to="/grandParent" element={<GrandParent />}><button>GrandParent</button></Link >

      </nav>

      <Routes>
        <Route path="/jsx" element={<JSXDemo name="shafee" luckyNumber={7} weight={68} />} />
        <Route path="/login" element={<LogInDemo isLoggedIn={isLoggedIn} />} />
        <Route path="/visible" element={<IsVisible isLoggedIn={isLoggedIn} />} />

        <Route path="/controlledInputs" element={<SimpleControlledInputs />} />
        <Route path="/miniForm" element={<MiniForms />} />
        <Route path="/SiblingDemo" element={<SiblingDemo />} />
        <Route path="/grandparent" element={<GrandParent />} />

      </Routes>
    </div>
  )
}

export default App
