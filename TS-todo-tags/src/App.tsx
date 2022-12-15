import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewNote } from './NewNote'

export type Note = {
  id:String
} & NoteData

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id:String
  label:string
}
function App() {
  return (
    <Container className="my-4">
    <Routes>
      <Route path='/' element={<h1>Hi</h1>} />
      <Route path='/new' element={<NewNote/>} />
      <Route path='/:id' element={<Navigate to='/' />} />
    </Routes>
    </Container>
  )
}
export default App;