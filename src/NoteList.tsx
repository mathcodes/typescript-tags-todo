import { useMemo, useState } from 'react'
import { Button, Card, Col, Form, Row, Stack, Badge, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Tag } from './App'
import style from './NoteList.module.css'
import './index.css'

type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

type styles = {
  Button: string
  create: string
}

type NoteListProps = {
  availableTags: Tag[]
  notes: SimplifiedNote[]
  onDeleteTag: (id: string) => void
  onUpdateTag: (id: string, label: string) => void
}

type EditTagsModalProps = {
  show: boolean
  availableTags: Tag[]
  handleClose: () => void
  onDeleteTag: (id: string) => void
  onUpdateTag: (id: string, label: string) => void
}

export function NoteList({ availableTags, notes, onUpdateTag, onDeleteTag }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [title, setTitle] = useState('')
  const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false)

  const styles = {
    Button: {
      backgroundColor: `var(--color-primary)`,
      color: '#000000',
      border: 'none',
      borderRadius: '20px',
      padding: '10px 30px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    },
    create: {
      backgroundColor: `var(--color-accentOrange)`,
      color: `var(--color-primary2)`,
      border: `var(--color-primary2)`,
      transition: "all 0.2s", 
      "&:hover": {
        backgroundColor: `var(--color-primary2)`,
        color:`var(--color-accentOrange)`
      },
    },
  }



  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      return (
        (title === '' || note.title.toLowerCase().includes(title.toLowerCase())) && (selectedTags.length === 0 ||
          // CHECK IF THE NOTE HAS ALL OF THE TAGS WE ARE SEARCHING FOR
          selectedTags.every(tag =>
            note.tags.some(noteTag => noteTag.id === tag.id)
          ))
      )
    })
  }, [title, selectedTags, notes])
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col><h1>Notes</h1></Col>
        <Col xs="auto">
          <Stack gap={2} direction='horizontal'>
            <Link to="/new">
              <Button
                style={styles.create}
              > Create </Button>
            </Link>
            <Button
              onClick={() => setEditTagsModalIsOpen(true)}
              className="button editsTags">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                options={availableTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                onChange={tags => {
                  setSelectedTags(tags.map(tag => {
                    return { label: tag.label, id: tag.value }
                  }))
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {filteredNotes.map(note => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags} />
          </Col>
        ))}
      </Row>
      <EditTagsModal
        show={editTagsModalIsOpen}
        handleClose={() => setEditTagsModalIsOpen(false)}
        availableTags={availableTags}
        onDeleteTag={onDeleteTag}
        onUpdateTag={onUpdateTag}
      />
    </>
  )
}
function NoteCard({ id, title, tags }: SimplifiedNote) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${style.card}`}>
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span style={{color:'black'}} className="fs-5">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="justify-content-center flex-wrap"
            >
              {tags.map(tag => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  )
}

function EditTagsModal({ availableTags, show, handleClose, onDeleteTag, onUpdateTag }: EditTagsModalProps) {
  return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Tags</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Stack gap={2}>
          {availableTags.map(tag => (
            <Row key={tag.id}>
              <Col>
                <Form.Control
                  type="text"
                  value={tag.label}
                  onChange={e => onUpdateTag(tag.id, e.target.value)}
                />

              </Col>
              <Col xs="auto">
                <Button
                  variant="outline-danger"
                  onClick={() => onDeleteTag(tag.id)}
                >
                  &times;
                </Button>
              </Col>
            </Row>
          )
          )}
        </Stack>
      </Form>
    </Modal.Body>
  </Modal>
}