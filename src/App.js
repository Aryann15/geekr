import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/onboarding" element={<Onboarding />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App