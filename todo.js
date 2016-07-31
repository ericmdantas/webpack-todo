require('./todo.css')

module.exports = {
  data() {
    return {
      todos: [],
      todo: {
        msg: '123'
      }
    }
  },
  template: `
    <div class="container">
      <form>
        <input type="text"
               v-model="todo.msg"/>
        <button type="button"
                @click="add(todo)">go</button>
      </form>

      <div>
        <ul>
          <li v-for="msg in todos" track-by="$index">{{msg}}</li>
        </ul>
      </div>
    </div>

  `,
  methods: {
    add(todo) {
      this.todos.push(todo.msg);
      this.todo.msg = '';
    }
  }
};
