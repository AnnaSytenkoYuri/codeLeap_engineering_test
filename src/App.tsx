import { useState } from 'react'
import './App.css'
import LoginModal from './components/LoginModal/LoginModal'
import MainPage from './pages/MainPage';

function App() {
  const [username, setUsername] = useState<string | null>(null)

  if (!username) {
   return <LoginModal onEnter={setUsername} />;
  }
  return (
    <MainPage username={username} />
  )
}

export default App
