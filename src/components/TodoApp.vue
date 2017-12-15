<template>
  <div class="todoApp">
    <input v-model="task" type="text"/><button v-on:click="add(task)">add</button>
    <br/>
    <ul>
      <li v-for="item in todoList">
        <input type="checkbox" v-model="item.checked" >
        {{ item.content }}
        <button v-on:click="remove(item.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'todoApp',
    data() {
      return {
        task: '',
      }
    },
    computed: {
      todoList() {
        return this.$store.state.TodoAppModule.todoList
      }
    },
    methods: {
      // how to make this functional?
      add(task) {
        this.$store.dispatch('TodoAdd', task)
        this.task = ''
      },
      remove(id) {
        this.$store.dispatch('TodoRemove', id)
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
  <!--h1, h2 {-->
    <!--font-weight: normal;-->
  <!--}-->
  <!--ul {-->
    <!--list-style-type: none;-->
    <!--padding: 0;-->
  <!--}-->
  <!--li {-->
    <!--display: inline-block;-->
    <!--margin: 0 10px;-->
  <!--}-->
  <!--a {-->
    <!--color: #42b983;-->
  <!--}-->
<!--</style>-->
