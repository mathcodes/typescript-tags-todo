<hr />

# SESSION 1

<hr />

## .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```
## LICENSE
```
MIT License

Copyright (c) 2022 WebDevSimplified

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
 4,737  
package-lock.json
Large diffs are not rendered by default.
```
## package.json
```json
{
  "name": "react-note-taking-app",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.2.3",
    "react": "^18.0.0",
    "react-bootstrap": "^2.7.0",
    "react-dom": "^18.0.0",
    "react-markdown": "^8.0.3",
    "react-router-dom": "^6.4.5",
    "react-select": "^5.4.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/uuid": "^8.3.4",
    "@vitejs/plugin-react": "^1.3.0",
    "typescript": "^4.6.3",
    "vite": "^2.9.15"
  }
}
```
## src/App.tsx
```ts
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <h1>Hi</h1>
}

export default App;

```
## src/main.tsx
```ts
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

## src/vite-env.d.ts
```ts
/// <reference types="vite/client" />
```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
## tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "esnext",
    "moduleResolution": "node"
  },
  "include": ["vite.config.ts"]
}
```

## vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
```
<hr />

# SESSION 2

<hr />


 
### TS-todo-tags/.gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
 ``` 
### TS-todo-tags/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
``` 

### TS-todo-tags/package.json
```json
{
  "name": "ts-todo-tags",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.2.3",
    "react": "^18.0.0",
    "react-bootstrap": "^2.7.0",
    "react-dom": "^18.0.0",
    "react-markdown": "^8.0.3",
    "react-router-dom": "^6.4.5",
    "react-select": "^5.4.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/uuid": "^8.3.4",
    "@vitejs/plugin-react": "^1.3.0",
    "typescript": "^4.9.4",
    "vite": "^4.0.0"
  }
}

```

### TS-todo-tags/src/App.css
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
``` 
### TS-todo-tags/src/App.tsx
```ts
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
```

### TS-todo-tags/src/assets/react.svg

 
### TS-todo-tags/src/index.css
```css
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
 ``` 
### TS-todo-tags/src/main.tsx
```ts
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
 ```
### TS-todo-tags/src/vite-env.d.ts
```ts
// <reference types="vite/client" />
 ``` 
### TS-todo-tags/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
### TS-todo-tags/tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```
### TS-todo-tags/vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
```


<hr/>

# SESSION 3
<hr/>

### TS-todo-tags/src/App.tsx
```ts
import "bootstrap/dist/css/bootstrap.min.css"
// DELETE import { Routes, Route } from 'react-router-dom' -->

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
```

### TS-todo-tags/src/NewNote.tsx
```ts
export function NewNote() {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  )
}
```

### TS-todo-tags/src/NoteForm.tsx

```ts
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
```

<hr/>

# SESSION 4
<hr/>

### TS-todo-tags/src/App.tsx

```ts
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
```

### TS-todo-tags/src/NewNote.tsx
```ts
import { NoteForm } from './NoteForm'

export function NewNote() {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  )
}
``` 
### TS-todo-tags/src/NoteForm.tsx
```ts
import { Form, Stack, Row, Col } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { Form, Stack, Row, Col, Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from "react-select/creatable"
export function NoteForm() {

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

export function NoteForm( { onSubmit }) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown:   markdownRef.current!.value,
      tags: [...selectedTags]
    })
  }
  return (
    <>
      <Form>
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control required />
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect isMulti />
                <CreatableReactSelect value ={selectedTags.map(tag => {
                  return{ label: tag.label, value: tag.id } 
                })}
                  onChange={tags => {
                    setSelectedTags(tags.map(tag => {
                      return{label: tag.label, id: tag.value }
                    }))
                  }}
                  isMulti 
                  />
              </Form.Group>
            </Col>

          </Row>
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control required as="textarea" ref={markdownRef} rows={15} />
          </Form.Group>
          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Button type="submit" variant="primary">Save</Button>
            <Link to="..">
              <Button type="button" variant="outline-secondary">Cancel</Button>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </>
  )
}
```

<hr/>

# SESSION 5
b3edd8fc02d5807a03ec029a3aac62b478a069f7
<hr/>

### TS-todo-tags/src/App.tsx
@@ -7,6 +7,16 @@ 
```ts
export type Note = {
  id:String
} & NoteData

export type RawNote ={
  id: string
}

export type RawNoteData ={
  id: string
  markdown: string
  tagIds: string
}

export type NoteData = {
  title: string
  markdown: string
@@ -18,7 +28,9 @@ export type Tag = {
  label:string
}
function App() {
  return (
  const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", []) 
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []) 
  return (  
    <Container className="my-4">
    <Routes>
      <Route path='/' element={<h1>Hi</h1>} />
```

### TS-todo-tags/src/useLocalStorage.tsx
```ts
import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue:T | (()=>T)) {
  const [value, setValue ] = useState<T>(()=>{
    const jsonValue = localStorage.getItem(key)

    if(jsonValue ==  null) {
        if(typeof initialValue === "function") {
          return (initialValue as () => T)()
        }else{
          return initialValue
        }
    } else {
      return JSON.parse(jsonValue)
    }
  })

}
```

<hr/>

# SESSION 6
962a357948c373e42b407cddd2f2132706d84913
<hr/>

### TS-todo-tags/src/useLocalStorage.tsx
```ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue:T | (()=>T)) {
  const [value, setValue ] = useState<T>(()=>{
    const jsonValue = localStorage.getItem(key)
    if(jsonValue ==  null) {
        if(typeof initialValue === "function") {
          return (initialValue as () => T)()
        }else{
          return initialValue
        }
    } else {
      return JSON.parse(jsonValue)
    }
  })
useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value))
}, [value, key])

  return [value, setValue] as [T, typeof setValue]
}

<hr/>
```

# SESSION 7 
0962af294ead4fe9f9b43dd257e2500e2def62c6
<hr/>

### TS-todo-tags/.gitignore
```
NOTES.md

# Logs
logs
*.log
```

### TS-todo-tags/src/App.tsx
```ts
import "bootstrap/dist/css/bootstrap.min.css"
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewNote } from './NewNote'
import { useLocalStorage } from './useLocalStorage'
import { v4 as uuidV4 } from 'uuid'

// Types
export type Note = {
  id: String
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

// updating tag in local storage which will chande id with user changes
export type RawNoteData = {
  id: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
	@@ -24,19 +29,43 @@ export type NoteData = {
}

export type Tag = {
  id: string
  label: string
}
function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }

  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag])
  }

  return (
    <Container className="mb-4">
      <Routes>
        <Route path='/' element={<h1>Hi</h1>} />
        <Route path='/new' element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  )
}
```
### TS-todo-tags/src/NewNote.tsx
```ts
import { NoteData, Tag } from './App'
import { NoteForm } from './NoteForm'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags : Tag[]
}

export function NewNote({ onSubmit, onAddTag, availableTags  }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  )
}
```

### TS-todo-tags/src/NoteForm.tsx
```ts
import { FormEvent, useRef, useState } from 'react'
import { Form, Stack, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from "react-select/creatable"
import { NoteData, Tag } from './App'
import { v4 as uuidV4 } from 'uuid'

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags : Tag[]
}

export function NoteForm({ onSubmit, onAddTag, availableTags }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value, // '!' means it will never be null as we have required them
      markdown: markdownRef.current!.value,
      tags: [...selectedTags]
    })
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect
                  onCreateOption={label => {
                    const newTag = { id: uuidV4(), label }
                    onAddTag(newTag)
                    setSelectedTags(prev => [...prev, newTag])
                  }}
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
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control required as="textarea" ref={markdownRef} rows={15} />
          </Form.Group>
          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Button type="submit" variant="primary">Save</Button>
            <Link to="..">
              <Button type="button" variant="outline-secondary">Cancel</Button>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </>
  )
}
```
### TS-todo-tags/src/useLocalStorage.tsx

```ts
import React, { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string,
  initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue == null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(jsonValue)
    }
})

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value))
}, [value, key])

return [value, setValue] as [T, typeof setValue]

}
<hr/>
```
# SESSION 8
3ddaa7d2c478ca779b9a9dc0903ad82be9055a0c
<hr/>


### TS-todo-tags/src/NoteForm.tsx
```ts
import { FormEvent, useRef, useState } from 'react'
import { Form, Stack, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import CreatableReactSelect from "react-select/creatable"
import { NoteData, Tag } from './App'
import { v4 as uuidV4 } from 'uuid'
type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags : Tag[]
}
export function NoteForm({ onSubmit, onAddTag, availableTags }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value, // '!' means it will never be null as we have required them
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    })

    navigate('..')
  }
```

<hr/>

# SESSION 9
73324b466a0ab7ce0066f045c7d90eed81f6eccc
<hr/>

### TS-todo-tags/src/App.tsx

```ts
import "bootstrap/dist/css/bootstrap.min.css"
import { useMemo } from "react"
import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import { NewNote } from "./NewNote"
import { useLocalStorage } from "./useLocalStorage"
import { v4 as uuidV4 } from "uuid"
import { NoteList } from "./NoteList"

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}
export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type Tag = {
  id: string
  label: string
}

export function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])
  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }

  function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return note
        }
      })
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        </Routes>
        </Container>



  )
}
```

### TS-todo-tags/src/NoteList.module.css

```ts
.card{
transition: translate ease-in-out 100ms, box-shadow ease-in-out 100ms;

}

.card:hover,
card:focus {
  translate: 0 -5px;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,.2)
}
```

### TS-todo-tags/src/NoteList.tsx

```ts
import { useMemo, useState } from 'react'
import { Button, Card, Col, Form, Row, Stack, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Tag } from './App'
import style from './NoteList.module.css'

type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

type NoteListProps = {
  availableTags: Tag[]
  notes: SimplifiedNote[]
}

export function NoteList({ availableTags, notes }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [title, setTitle] = useState('')

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
  return <>
    <Row className="align-items-center mb-4">
      <Col><h1>Notes</h1></Col>
      <Col xs="auto">
        <Stack gap={2} direction='horizontal'>
          <Link to="/new">
            <Button variant="primary"> Create </Button>
          </Link>
          <Button variant="outline-secondary">Edit Tags</Button>
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
  </>
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
          <span className="fs-5">{title}</span>
          {tags.length > 0 && (
          <Stack gap={1} direction="horizontal" className="justify-content-center flex-wrap">
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
```
### TS-todo-tags/src/main.tsx
```ts
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import {App} from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
```
