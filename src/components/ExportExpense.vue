<script setup lang="ts">
    import { mkConfig, generateCsv, download} from "export-to-csv";
    import { getUserExpenses, type Expense } from '@/firebase/database';
    
    const expenses: Expense[] = await getUserExpenses();
    
    const newExpenses = expenses.map(expense => ({name: expense.expenseName, amount: expense.expenseAmount, category: expense.expenseCategory, date: expense.createdAt}))

    const csvConfig = mkConfig({useKeysAsHeaders: true, quoteStrings: false, filename: "Expenses"})

    const csv = generateCsv(csvConfig)(newExpenses)
    
    function downloadCsv() {
        download(csvConfig)(csv)
    }
    
</script>

<template>
    <div class="btn-container">
        <button @click="downloadCsv">Export</button>
        <svg @click="downloadCsv" style="width:50px; height: 3.3rem; padding-right: 18px; background-color: rgb(0, 80, 0);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"/></svg>
    </div>
</template>

<style scoped>
    .btn-container {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        margin: auto;
        margin-top: 1rem;
    }

    button {
        background-color: var(--secondary-color);
        color: white;
        padding: 1rem 2.5rem;
        border: none;
        font-size: 1.1rem;
        font-weight: 600;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        cursor: pointer;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	    transition: background-color 0.3s ease;
    }

    svg {
        padding: 13px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        cursor: pointer;
    }

    button:hover {
        background: #257c29;
    }

    @media screen and (max-width: 600px) {
        .btn-container {
            justify-content: center;
        }
    }
</style>