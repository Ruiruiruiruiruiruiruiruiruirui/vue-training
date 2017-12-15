/**
 * Created by Rui on 15/12/17.
 */
import axios from 'axios'

export default (payload) =>
  axios.post('http://localhost:8082/todo/store', {
    payload
  }).then(response => response.data)

