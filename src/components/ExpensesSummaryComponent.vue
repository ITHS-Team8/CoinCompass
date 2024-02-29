<template>
    <div class="container">
        <div class="text-container">
            <span class="total-text">Total expenses</span>
            <span class="total-text">{{ expensesStore.totalAmount }}kr</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useExpensesStore } from '../stores/ExpensesStore'
    const expensesStore = useExpensesStore()
</script>

<style scoped>
    .container {
        margin: auto;
        display: flex;
        justify-content: center;
        margin-top: 1.2rem;
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
