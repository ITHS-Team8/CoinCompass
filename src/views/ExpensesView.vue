<script setup lang="ts">
    import { ref } from 'vue'
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import ExpensesTable from '../components/ExpensesTable.vue';

    import CreateExpanseModal from '../components/CreateExpenseModal.vue'
    const modal = ref<InstanceType<typeof CreateExpanseModal>>();
    const showModal = () => modal.value?.show();
</script>

<template>
    <NavBar />
    <main>
        <CreateExpanseModal ref="modal" showCancel />
        <button @click="showModal">Create Expense</button>

        <ExpensesTable />
        <ExpensesSummary />
</template>

<style scoped>
    main {
        margin-top: 10vh;
    }
</style>
