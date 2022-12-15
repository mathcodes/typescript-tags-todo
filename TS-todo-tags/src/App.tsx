import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Hi</h1>} />
    </Routes>
  )
}
export default App;