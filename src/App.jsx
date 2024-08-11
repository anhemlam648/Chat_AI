import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import HomePage from './components/HomePage';
function App() {

  return (
    <Router>
      <div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
