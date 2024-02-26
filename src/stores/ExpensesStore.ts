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
    },
    actions: {
        /* Removes the chosen item*/
        removeExpense(id: number) {
            this.expenses = this.expenses.filter((expense) => {
                return expense.id !== id
            })
        },
        /* Adds item */
        addExpense(expense: { name: string; amount: number }) {
            this.expenses.push({
                id: this.expenses.length + 1,
                name: expense.name,
                amount: expense.amount
            })
        },
        /* Edit item */
        editExpense(expense: { id: number; name: string; amount: number }) {
            const index = this.expenses.findIndex(
                (item) => item.id === expense.id
            )
            this.expenses[index] = expense
        }
    }
})
