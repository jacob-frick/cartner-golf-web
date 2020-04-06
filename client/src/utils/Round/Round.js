import axios from './../Axios'

const Round = {
    createRound: round => axios.post('/api/rounds/create', round, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }})
}

export default Round