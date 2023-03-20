import axios from 'axios'

export default axios.create({
  baseURL: 'https://dindin2-back-mfcma.ondigitalocean.app',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
