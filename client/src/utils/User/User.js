import axios from './../Axios'
const AuthHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}
const User = {
    login: creds => axios.post('/api/users/login', creds),
    findUser: username => axios.get(`/api/users/username/${username}`, AuthHeader),
    sendFriendRequest: id => axios.post(`/api/friends/send/${id.toString()}`,{}, AuthHeader)
}
export default User