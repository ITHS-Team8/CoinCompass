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
            <h1>
                #{{ expense.id }} {{ expense.name }} - {{ expense.amount }} -
                {{ expense.category }} - {{ expense.comment }}
            </h1>
            <button @click="editExpense(expense.id)">Edit</button>
            <button @click="expensesStore.removeExpense(expense.id)">
                Delete
            </button>
        </div>
        <h1>{{ expensesStore.totalAmount }}kr</h1>
        <h1>{{ expensesStore.expenses.length }}</h1>

        <div>
            <input type="text" v-model="name" />
            <input type="text" v-model="amount" />
            <button @click="addExpense">Add expense</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useExpensesStore } from '../stores/ExpensesStore'
    import { ref } from 'vue'

    const expensesStore = useExpensesStore()

    const name = ref('')
    const amount = ref('')

    function addExpense() {
        expensesStore.addExpense({
            name: name.value,
            amount: Number(amount.value),
            category: 'Food Test',
            comment: 'Comment Test'
        })
        console.log(expensesStore.expenses)

        name.value = ''
        amount.value = ''
    }

    function editExpense(id: number) {
        console.log('Edit expense', id)
        expensesStore.editExpense({
            id: id,
            name: 'New name',
            amount: 1000,
            category: 'Food',
            comment: 'New comment'
        })
    }
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
