import axios from './axios'

export const getUsers = () => axios.get('/users')
export const getUserById = (id) => axios.get(`/users/${id}`)
export const createUser = (userData) => axios.post('/users', userData)
