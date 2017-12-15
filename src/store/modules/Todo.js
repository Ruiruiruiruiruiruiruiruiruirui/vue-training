/**
 * Created by Rui on 15/12/17.
 */
import _ from 'lodash'

const TodoModule = {
  state: {
    todoList: {
      1: {
        id: '1',
        content: 'item 1',
        checked: false,
      },
      2: {
        id: '2',
        content: 'item 2',
        checked: true,
      },
      3: {
        id: '3',
        content: 'item 3',
        checked: false,
      },
    },
  },
  mutations: {
    add(state, task) {
      const newTask = {}

      newTask[Object.keys(state.todoList).length + 1] = {
        id: Object.keys(state.todoList).length + 1,
        content: task,
        checked: false,
      }

      state.todoList = {
        ...state.todoList,
        ...newTask
      }
    },
    remove(state, id) {
      state.todoList = _.omit(state.todoList, id)
    },
  },
  actions: {
    TodoAdd({ commit }, payload){
      commit('add', payload)
    },
    TodoRemove({ commit }, id){
      commit('remove', id)
    }
  },
  getters: {},
}

export default TodoModule
