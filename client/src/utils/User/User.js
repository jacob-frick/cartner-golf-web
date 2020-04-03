import axios from './../Axios'
const User = {
    login: creds => axios.post('/api/users/login', creds),
    findUser: username => axios.get(`/api/users/username/${username}`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    sendFriendRequest: id => axios.post(`/api/friends/send/${id.toString()}`,{}, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    getSentFriendRequests: () => axios.get('/api/friends/users/sent-requests', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    getRecFriendRequests: () => axios.get('/api/friends/users/rec-requests', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }),
    getFriends: () => axios.get('/api/friends/users/friends', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    acceptRequest: id => axios.put(`/api/friends/users/accept/${id.toString()}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }}),
    cancelRequest: id => axios.put(`/api/friends/users/cancel/${id.toString()}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }),
    declineRequest: id => axios.put(`/api/friends/users/decline/${id.toString()}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }),
    removeFriend: id => axios.put(`/api/friends/users/remove/${id.toString()}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }),
    getPendingRounds: id => axios.get('/api/rounds/users/pending', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })
}
export default User