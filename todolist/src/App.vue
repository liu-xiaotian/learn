<template>
  <div id="app">
    <h1>根组件</h1>
    <todoList :todolist="todoList"></todoList>
    <todoButton @change-active="changeActive"></todoButton>
  </div>
</template>

<script>
import todoList from "./components/todoList.vue";
import todoButton from "./components/todoButton.vue";
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
  },
  components: {
    todoList,
    todoButton,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
