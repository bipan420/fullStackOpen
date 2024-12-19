const express = require('express')
const morgan = require('morgan')
const app = express()


 let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:', request.path)
  console.log("Body", request.body)
  console.log('---')
  next()
}

app.use(express.json())
app.use(requestLogger)
app.use(morgan('tiny'))

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const personsLen = persons.length
    const now = new Date()
    response.send(`<div> 
        <p>Phonebook has info for ${personsLen} people</p> 
        <p>${now}</p>
        </div>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(person => Number(person.id))): 0
  const id = maxId + 1
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name or Number is missing'
    })
  }
  const findName = persons.find(person => person.name === body.name)
  if (findName) {
    return response.status(400).json({
      error: 'The name already exists in the phonebook'
    })
  }
  const person = {
    id: id,
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  response.json(persons)
  console.log(JSON.stringify(person))
})

morgan.token('type', function(req, res) { return req.body ? JSON.stringify(res.body) : ''})

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT)
console.log(`Listening on the port ${PORT}`)
