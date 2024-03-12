<template>
  <form @submit.prevent="submitBudget">
    <h2>Create Your Budget</h2>

    <div class="input-group">
      <label for="budget-name">Budget Name:</label>
      <input type="text" id="budget-name" v-model="budgetName" required>
    </div>

    <div class="input-group" v-for="(category, index) in categories" :key="index">
      <label :for="'category-' + index">{{ category.name }}:</label>
      <input type="number" :id="'category-' + index" v-model="category.amount" min="0" required>
    </div>

    <button type="submit">Create Budget</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const budgetName = ref('');
const categories = ref([
  { name: 'Food', amount: 0 },
  { name: 'Entertainment', amount: 0 },
]);

const submitBudget = () => {
  console.log('Budget Created:', budgetName.value, categories.value);
};
</script>

<style scoped>
input[type="text"],
input[type="number"] {
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-group {
  margin-bottom: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

h2 {
  text-align: center;
}
</style>