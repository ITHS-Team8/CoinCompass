<script setup lang="ts">
</script>

<template>
    <div class="form-header">
		  <h1>Edit Expense</h1>
	</div>
    <form method="dialog" class="form-container">
        <div>
            <label for="expenseName">Expense</label>
            <input type="text" id="expenseName" name="expenseName" required />
        </div>

        <div>
            <label for="expenseAmount">Amount</label>
            <input type="number" id="expenseAmount" name="expenseAmount" required />
        </div>

        <div>
            <label for="expenseDescription">Description</label>
            <textarea id="expenseDescription" name="expenseDescription" required></textarea>
        </div>

        <div>
            <label for="expenseCategory">Category</label>
            <select id="expenseCategory">
                <option value="none">None</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
            </select>
        </div>
        
        <div>
            <label for="expenseDate">Date</label>
            <input type="date" id="expenseDate" name="expenseDate" required />
        </div>

        <button class="form-button">Add Expense</button>
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
