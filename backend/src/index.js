const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects

  return response.json(results);
})

app.post('/projects', (request, response) => {
  const {title, owner} = request.body

  const project = {id: uuidv4(), title, owner}

  projects.push(project)

  return response.json(project);
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params
  const {title, owner} = request.body

  const projectIndex = projects.findIndex(project => project.id === id)

  if(projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found'})
  }

  const project = {
    id,
    title,
    owner
  }
  projects[projectIndex] = project

  return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params

  const projectIndex = projects.findIndex(project => project.id === id)

  if(projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found'})
  }

  // splice = método para remover informação do array
  // splice(índice a ser removido, quantas posições remover a partir deste índice)
  projects.splice(projectIndex, 1)

  return response.status(204).send();
})

app.listen(3333, () => {
  console.log('Back-end started!')
}); 