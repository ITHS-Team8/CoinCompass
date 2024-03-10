<script setup lang="ts">
    import { addUserExpense } from '@/firebase/database';
    import { ref } from 'vue';

    
    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }   
    
    const expenseCategories = ref(['Food', 'Transport', 'Utilities', 'Entertainment', 'Other']);
    const expenseName = ref('');
    const expenseDescription = ref('');
    const expenseAmount = ref(0);
    const expenseCategory = ref(expenseCategories.value[0])
    const expenseDate = ref(new Date);
</script>

<template>
    <div class="form-header">
		<h1>Create Expense</h1>
	</div>
    <form method="dialog" class="form-container">
        <div>
            <label for="expenseName">Expense</label>
            <input type="text" id="expenseName" name="expenseName" placeholder="Expense Name" v-model="expenseName"  required />
        </div>
        <div>
            <label for="expenseAmount">Amount</label>
            <input type="number" id="expenseAmount" name="expenseAmount" placeholder="Expense Amount" v-model="expenseAmount" required />
        </div>
        <div>
            <label for="expenseDescription">Description</label>
            <textarea id="expenseDescription" name="expenseDescription" placeholder="Expense Description" v-model="expenseDescription">
            </textarea>
        </div>
        <div>
            <label for="expenseCategory">Category</label>
            <select id="expenseCategory" v-model="expenseCategory">
                <option v-for="category in expenseCategories" :value="category">{{ category }}</option>
            </select>
        </div>
        <div>
            <label for="expenseDate">Date</label>
            <input type="date" id="expenseDate" name="expenseDate" v-model="expenseDate" required />
        </div>

        <button class="form-button" @click="addUserExpense(expenseName, expenseDescription, expenseAmount, expenseCategory, expenseDate)">
            Add Expense
        </button>
    </form>
</template>

<style scoped>
    .form-header {
        background-color: var(--primary-color);
        color: #FFF;
        padding: 1rem;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
    }
    .form-container > div {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .form-container > div > input, textarea, select {
        border: 1px solid var(--primary-color);
        border-radius: 6px;
        padding: 0.5rem;
    }

    .form-container > div > input, textarea, select:focus {
        outline: none;
    }

    .form-container > div > textarea {
        height: 4rem;
        resize: none;
        padding: 0.5rem 0.25rem;
        font-family: Montserrat, sans-serif;
        font-size: 0.75rem;
    }

    .form-container > div > input[type="date"] {
        padding: 0.5rem 0.25rem;
        font-family: Montserrat, sans-serif;
    }

    .form-button {
        padding: 0.5rem;
        border: none;
        border-radius: 6px;
        background-color: var(--primary-color);
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    .form-button:hover {
        background-color: var(--secondary-color);
    }
</style>
