import axios from 'axios'
const baseUrl = "https://animated-space-capybara-pg46qwxvq5p3777q-3001.app.github.dev/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const savePhonebook = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
const filterPhonebook = (text) => {
    const request = axios.get(baseUrl)
}

const deletePhonebook = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updatePhonebook = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const phonebookService = {getAll, savePhonebook, deletePhonebook, updatePhonebook}
export default phonebookService

