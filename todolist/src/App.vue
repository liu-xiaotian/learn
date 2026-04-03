<template>
  <div id="app">
    <h1>根组件</h1>
    <todoList></todoList>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
export default {
  name: "App",
  components: {
    todoList,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
