import { Form, Stack, Row, Col } from 'react-bootstrap'
import CreatableReactSelect from "react-select/creatable"
export function NoteForm() {
  return (
    <>
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect isMulti />
              </Form.Group>
            </Col>

          </Row>
        </Stack>
      </Form>
    </>
  )
}