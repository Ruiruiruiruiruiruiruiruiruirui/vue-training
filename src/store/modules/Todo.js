/**
 * Created by Rui on 15/12/17.
 */
import _ from 'lodash'
import { TodoModuleAPIs } from './../../api'

const TodoModule = {
  state: {
    todoList: {},
  },
  mutations: {
    add(state, task) {
      const newTask = {}

      const lastIndex = parseInt(Object.keys(state.todoList)[Object.keys(state.todoList).length - 1])

      newTask[lastIndex + 1] = {
        id: lastIndex + 1,
        content: task,
        checked: false,
      }

      state.todoList = {
        ...state.todoList,
        ...newTask
      }

      TodoModuleAPIs.TodoAppStore(state.todoList)
    },
    remove(state, id) {
      state.todoList = _.omit(state.todoList, id)

      TodoModuleAPIs.TodoAppStore(state.todoList)
    },
    initStore(state, payload) {
      state.todoList = payload
    },
  },
  actions: {
    TodoAdd({ commit }, payload){
      commit('add', payload)
    },
    TodoRemove({ commit }, id){
      commit('remove', id)
    },
    InitTodoStore({ commit }){
      TodoModuleAPIs.TodoAppFetch().then(json => {
        commit('initStore', json)
      })
    },
  },
  getters: {},
}

export default TodoModule
