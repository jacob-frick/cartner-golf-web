import axios from './../Axios'
const AuthHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}
const Course = {
    findAll: () => axios.get('/api/courses/all', AuthHeader)
}
export default Course