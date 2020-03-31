import axios from './../Axios'

const User = {
    login: creds => axios.post('/api/users/login', creds),
}
export default User