/**
 * Created by Rui on 15/12/17.
 */
import axios from 'axios'

export default () =>
  axios.get('https://vue-training-node.herokuapp.com/todo/fetch')
  .then(response => response.data)

