<template>
    <div class="container">
        <div class="text-container">
            <span class="total-text">Total expenses</span>
            <span class="total-text">{{ totalAmount }}kr</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { getExpenses } from '@/firebase/database';
    const expenses = await getExpenses();
    const totalAmount = expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0);
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
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .total-text {
        font-weight: 600;
        font-size: 1.2rem;
    }
</style>
