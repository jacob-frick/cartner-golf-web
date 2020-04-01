import axios from './../Axios'
const AuthHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}
const User = {
    login: creds => axios.post('/api/users/login', creds),
    findUser: username => axios.get(`/api/users/username/${username}`, AuthHeader),
    //sendFriendRequest: id => axios.put(`/api/users/send`, AuthHeader, {id})
    //sendFriendRequest: id => axios.put(`/api/users/send/${id.toString()}`, AuthHeader)
    sendFriendRequest: id => axios.get(`/api/users/send/${id.toString()}`, AuthHeader)
}
export default User