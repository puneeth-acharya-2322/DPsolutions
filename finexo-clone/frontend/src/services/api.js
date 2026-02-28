import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // No response received
      return Promise.reject({ message: 'Network error. Please check your connection.' })
    }
    return Promise.reject({ message: error.message })
  }
)

export const submitContact = (data) => api.post('/api/contact', data)

export default api
