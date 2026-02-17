import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Saved from './pages/Saved'
import Digest from './pages/Digest'
import Settings from './pages/Settings'
import Proof from './pages/Proof'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/digest" element={<Digest />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/proof" element={<Proof />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
