import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="App">
      <Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="*" element={<h1>Vous êtes perdu</h1>} />
			</Routes>
    </div>
  )
}

export default App
