import { defineStore } from 'pinia'

export const useExpensesStore = defineStore('expensesStore', {
    state: () => ({
        expenses: [
            { id: 1, name: 'Lunch', amount: 15 },
            { id: 2, name: 'Dinner', amount: 25 },
            { id: 3, name: 'Ica', amount: 80 }
        ]
    }),
    getters: {
        /* Count total amount of all expenses */
        totalAmount(state) {
            return state.expenses.reduce(
                (total, expense) => total + expense.amount,
                0
            )
        }
    }
})
