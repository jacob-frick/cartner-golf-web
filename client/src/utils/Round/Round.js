import axios from './../Axios'

const Round = {
    createRound: round => axios.post('/api/rounds/create', round, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    getRound: rid => axios.get(`/api/rounds/full/${rid}`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    invite: id => axios.put(`/api/rounds/invite/${id}`, {},{ headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }})
}

export default Round