import axios from './../Axios'
const AuthHeader = { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}
const User = {
    login: creds => axios.post('/api/users/login', creds),
    findUser: username => axios.get(`/api/users/username/${username}`, AuthHeader),
    sendFriendRequest: id => axios.post(`/api/friends/send/${id.toString()}`,{}, AuthHeader),
    getSentFriendRequests: () => axios.get('/api/friends/users/sent-requests', AuthHeader),
    getRecFriendRequests: () => axios.get('/api/friends/users/rec-requests', AuthHeader),
    getFriends: () => axios.get('/api/friends/users/friends', AuthHeader)
}
export default User