/**
 * Created by Rui on 15/12/17.
 */
import axios from 'axios'

export default () =>
  axios.get('http://localhost:8082/todo/fetch')
  .then(response => response.data)

