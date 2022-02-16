import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo_list: {
      id: 0,
      content: "",
      isFinished: false,
    },
    tasks: [],
    finished_list: []
  },
  getters: {
    getTodoList(state) {
      return state.tasks;
    },
    getFinished: (state) => (id) => {
      let result = state.tasks.find(o => o.id === id)
      if(result){
        return result
      }
      return null;
    }
  },
  mutations: {
    createTask(state, content) {
      state.todo_list = {
        id: state.tasks.length == 0 ? 1 : state.tasks[state.tasks.length - 1].id+1,
        content,
        isFinished : false,
      };
      state.tasks.push(state.todo_list);
    }
  }
});
