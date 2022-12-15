import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewNote } from './NewNote'
function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Hi</h1>} />
      <Route path='/new' element={<NewNote/>} />
      <Route path='/:id' element={<Navigate to='/' />} />
    </Routes>
  )
}
export default App;