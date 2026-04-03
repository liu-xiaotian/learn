<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="item in todolist"
      :key="item.id"
    >
      <!-- 复选框 -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          :id="item.id"
          v-model="item.isCompleted"
        />
        <label
          class="form-check-label"
          :for="item.id"
          :class="item.isCompleted ? 'delete' : ''"
        >
          {{ item.task }}
        </label>
      </div>
      <span v-if="item.isCompleted" class="badge bg-primary rounded-pill"
        >已完成</span
      >
      <span v-else class="badge bg-warning rounded-pill">未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todoList",
  props: {
    todolist: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.list-group {
  width: 500px;
  margin: 0 auto;
}
.delete {
  text-decoration: line-through;
}
</style>
