import http from '../utils/http'

export default {
   getPessoas :() => http.get(`users?page=1`),
   getPessoa  : (id) => http.get(`/users/${id}`)

}

