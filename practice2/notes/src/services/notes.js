import axios from 'axios'
const baseUrl = 'https://animated-space-capybara-pg46qwxvq5p3777q-3001.app.github.dev/notes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const noteService =  {
    getAll,
    create,
    update
}

export default noteService