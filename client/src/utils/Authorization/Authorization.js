import axios from './../../config/axiosConfig.js'
import React, { createContext, useReducer, useContext } from 'react'
const AuthContext = createContext({
    isAuthed : false
})
const Authorization = {
    auth: () => axios.get('/api/authorize', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })
}
//git const AuthProvider
export default Authorization