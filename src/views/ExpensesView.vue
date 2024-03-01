<script setup lang="ts">
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import ExpensesTable from '../components/ExpensesTable.vue';
</script>

<template>
  <NavBar />
    <main>
        <ExpensesTable />
        <ExpensesSummary />
    </main>
</template>

<style scoped>
</style>
