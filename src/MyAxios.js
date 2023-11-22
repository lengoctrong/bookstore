import axios from 'axios'

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
