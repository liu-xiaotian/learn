<template>
  <div id="app">
    <h1>todo</h1>
    <todoInput @addTask="addTask"></todoInput>
    <todoList :todolist="todoList"></todoList>
    <todoButton @change-active="changeActive"></todoButton>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import todoButton from "./components/todoButton.vue";
import todoInput from "./components/todoInput.vue";
export default {
  name: "App",
  data() {
    return {
      todoList: [
        { id: 1, task: "吃饭", isCompleted: true },
        { id: 2, task: "睡觉", isCompleted: false },
        { id: 1, task: "打豆豆", isCompleted: false },
      ],
      active: 0,
    };
  },
  computed: {
    todoList() {
      if (this.active === 0) {
        return this.todoList;
      } else if (this.active === 1) {
        return this.todoList.filter((item) => item.isCompleted);
      } else {
        return this.todoList.filter((item) => !item.isCompleted);
      }
    },
  },
  methods: {
    changeActive(active) {
      this.active = active;
      console.log(this.active);
    },
    addTask(taskname) {
      this.todoList.push({
        id: this.todoList.length + 1,
        task: taskname,
        isCompleted: false,
      });
    },
  },
  components: {
    todoList,
    todoButton,
    todoInput,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
