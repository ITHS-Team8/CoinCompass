<template>
  <div class="budget-card">
    <h3>{{ budgetName }}</h3>
    <ul>
      <li v-for="(amount, category) in categories" :key="category">
        {{ category }}: {{ formatCurrency(amount) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps({
  budgetName: String,
  categories: Object,
});


function formatCurrency(amount) {
  return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(amount);
}
</script>

<style scoped>
.budget-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f9f9f9;
}

h3 {
  margin-top: 0;
}
</style>

