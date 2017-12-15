/**
 * Created by Rui on 15/12/17.
 */
import axios from 'axios'

export default (payload) =>
  axios.post('https://vue-training-node.herokuapp.com/todo/store', {
    payload
  }).then(response => response.data)

