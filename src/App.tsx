import { useState } from 'react'
import './App.css'
import LoginModal from './components/LoginModal'

function App() {
  const [userName, setUserName] = useState<string | null>(null)

  if (!userName) {
   return <LoginModal onEnter={setUserName} />;
  }
  return (
    <div className="App">
      <h1>Welcome, {userName}!</h1>
    </div>
  )
}

export default App
