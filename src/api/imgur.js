import qs from 'qs'

const CLIENT_ID = '626d11926441354'
const ROOT_URL = 'https:/api.imgur.com/'

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`
  },
  logout() {
    const queryString = 'localhost:8080'
    window.location = `${qs.stringify(queryString)}`
  }
}
