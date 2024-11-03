/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

// const unauthorizedCode = [403]

const BaseService = axios.create({
  timeout: 60000,
  baseURL: import.meta.env.VITE_API + '/v1',
})

BaseService.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

BaseService.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error)
  },
)

export default BaseService
