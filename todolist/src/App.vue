<template>
  <div id="app">
    <h1>根组件</h1>
    <todoList :todolist="todoList"></todoList>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
export default {
  name: "App",
  data() {
    return {
      todoList: [
        { id: 1, task: "吃饭", isCompleted: true },
        { id: 2, task: "睡觉", isCompleted: false },
        { id: 1, task: "打豆豆", isCompleted: false },
      ],
    };
  },
  components: {
    todoList,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
