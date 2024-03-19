<template>
  <div class="budget-card">
    <div class="title">
      <h3>{{ budgetName }}</h3>
    </div>
    <div class="content-container">
      <p>Kategorier: {{ categories }}</p>
      <p>Belopp: {{ amount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps({
  budgetName: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    default: '',
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.budget-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #eaeaea;
  min-width: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.budget-card .title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #d5d4d4;
  border-radius: 12px 12px 0 0;
}

.budget-card h3 {
  font-style: italic;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.5rem;
}

.budget-card .content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.budget-card .content-container p {
  font-size: 1.6rem;
}

@media (max-width: 800px) {
  .budget-card .content-container {
    height: 40px;
  }
}
</style>