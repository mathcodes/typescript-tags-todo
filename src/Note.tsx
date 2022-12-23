import { useNote } from "./NoteLayout"
import { Form, Stack, Row, Col, Badge, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import ReactMarkdown from 'react-markdown'

type NoteProps = {
  onDelete: (id: string) => void
}

export function Note({onDelete}: NoteProps) {
  const note = useNote()
  const navigate = useNavigate()
  return <>
    <Row className="align-items-center mb-4">
      <Col>
        <h1>{note.title}</h1>
        {note.tags.length > 0 && (
       <Stack 
        gap={1}
        direction="horizontal"
        className="flex-wrap"
     >
        {note.tags.map(tag => (
          <Badge className="text-truncate" key={tag.id}>
            {tag.label}
          </Badge>
        ))}
      </Stack>
    )}
    </Col>
    <Col xs="auto">
        <Stack gap={2} direction='horizontal'>
          <Link to={`/${note.id}/edit`}>
            <Button className="button edit"> Edit </Button>
          </Link>
          <Button onClick={() => {
              onDelete(note.id)
              navigate("/")
            }} className="button delete"> Delete </Button>
          <Link to="/">
          <Button className="button back">Back</Button>
          </Link>
        </Stack>
      </Col>
  </Row>
  <ReactMarkdown>{note.markdown}</ReactMarkdown>
  </>
}

