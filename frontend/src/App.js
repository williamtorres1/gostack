import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import backgroundImage from './assets/background.jpeg'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
    console.log(projects)
  }
  return (
    <>
      <Header title="Projects" />
      <img width={300}src={backgroundImage} />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App