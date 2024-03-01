<script setup lang="ts">
    import { ref } from 'vue'
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import ExpensesTable from '../components/ExpensesTable.vue';

    import CreateExpanseModal from '../components/CreateExpenseModal.vue'
    const createModal = ref<InstanceType<typeof CreateExpanseModal>>();
    const showCreateModal = () => createModal.value?.show();

    import EditExpenseModal from '@/components/EditExpenseModal.vue'
    const editModal = ref<InstanceType<typeof EditExpenseModal>>();
    const showEditModal = () => editModal.value?.show();

</script>

<template>
    <NavBar />
    <main>
        <CreateExpanseModal ref="createModal" showCancel />
        <button @click="showCreateModal">Create Expense</button>
        <EditExpenseModal ref="editModal" showCancel />
        <button @click="showEditModal">Edit Expense</button>
        
        <ExpensesTable />
        <ExpensesSummary />
    </main>
</template>

<style scoped>
    main {
        margin-top: 10vh;
    }
</style>
