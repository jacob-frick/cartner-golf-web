import axios from './../Axios'
const Course = {
    findAll: () => axios.get('/api/courses/all', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    findById: id => axios.get(`/api/courses/id/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }})
}
export default Course