import axios from 'axios'
const baseUrl = 'https://animated-space-capybara-pg46qwxvq5p3777q-3001.app.github.dev/notes'

const getAll = () => {
   const request = axios.get(baseUrl)
   return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const noteService =  {
    getAll,
    create,
    update
}

export default noteService