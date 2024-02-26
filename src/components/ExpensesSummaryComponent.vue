<template>
    <h1>Expenses summary</h1>
    <div class="container">
        <div class="text-container">
            <span class="total-text">Total expenses</span>
            <span class="total-text">$500</span>
        </div>
    </div>

    <div>
        <h1>{{ expensesStore.expenses }}</h1>
    </div>
</template>

<script setup lang="ts">
    import { useExpensesStore } from '../stores/ExpensesStore'

    const expensesStore = useExpensesStore()
</script>

<style scoped>
    .container {
        margin: auto;
        margin-top: 10vh; /* Temporary för att se den */

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
