import { tasks } from '../mock';

export default {
  state: {
    tasks
  },
  mutations: {
    createTask (state, payload) {
      state.tasks.push(payload)
    },
    updateTasks (state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    createTask ({ commit }, payload) {
      commit('createTask', payload);
    },

    deleteTask({ commit, getters }, payload) {
      const tasks = getters.tasks;
      const taskIndex = tasks.indexOf(payload);
      tasks.splice(taskIndex, 1);

      commit('updateTasks', tasks);
    },

    toggleStatus ({ commit, getters }, payload) {
      const tasks = getters.tasks;
      const taskIndex = tasks.indexOf(payload);

      payload.completed = !payload.completed;
      tasks.splice(taskIndex, 1, payload);

      commit('updateTasks', tasks);
    },

    removeTasksByCategoryId ({ commit, getters }, payload) {
      const tasksWithoutToRemove = getters.tasks
        .filter(task => task.categoryId !== payload);

      commit('updateTasks', tasksWithoutToRemove);
    }
  },
  getters: {
    tasks (state) {
      return state.tasks;
    }
  }
}