<template>
    <h1>Expenses summary</h1>
    <div class="container">
        <div class="text-container">
            <span class="total-text">Total expenses</span>
            <span class="total-text">{{ expensesStore.totalAmount }}kr</span>
        </div>
    </div>

    <div>
        <div v-for="expense in expensesStore.expenses">
            <h1>{{ expense.name }} - {{ expense.amount }}</h1>
            <button>Edit</button>
            <button @click="expensesStore.removeExpense(expense.id)">
                Delete
            </button>
        </div>
        <h1>{{ expensesStore.totalAmount }}kr</h1>
    </div>
</template>

<script setup lang="ts">
    import { useExpensesStore } from '../stores/ExpensesStore'

    const expensesStore = useExpensesStore()
</script>

<style scoped>
    .container {
        margin: auto;
        margin-top: 10vh; /* Temporary för att se den (Den hamnar under navbaren.) */

        display: flex;
        justify-content: center;
    }
    .text-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eaeaea;
        padding: 1.2rem;
        width: 90%;
        border-radius: 12px;
    }

    .total-text {
        font-weight: 600;
        font-size: 1.2rem;
    }
</style>
