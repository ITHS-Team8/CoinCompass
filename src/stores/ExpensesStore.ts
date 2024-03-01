import { defineStore } from 'pinia'

export const useExpensesStore = defineStore('expensesStore', {
    state: () => ({
        expenses: [
            {
                id: 1,
                name: 'Lunch',
                amount: 15,
                category: 'Food',
                comment: 'Tasty'
            },
            {
                id: 2,
                name: 'Dinner',
                amount: 25,
                category: 'Food',
                comment: 'Delicious'
            },
            {
                id: 3,
                name: 'Ica',
                amount: 80,
                category: 'Groceries',
                comment: 'Expensive'
            },
            {
                id: 4,
                name: 'Webhallen',
                amount: 8000,
                category: 'Electronics',
                comment: 'Expensive'
            },
            {
                id: 5,
                name: 'H&M',
                amount: 125,
                category: 'Clothing',
                comment: 'Fashion'
            },
            {
                id: 6,
                name: 'Netflix',
                amount: 125,
                category: 'Entertainment',
                comment: 'Fashion'
            }
        ]
    }),
    getters: {
        totalAmount(state) {
            return state.expenses.reduce(
                (total, expense) => total + expense.amount,
                0
            )
        }
    },
    actions: {
        removeExpense(id: number) {
            this.expenses = this.expenses.filter((expense) => {
                return expense.id !== id
            })
        },
        addExpense(expense: {
            name: string
            amount: number
            category: string
            comment: string
        }) {
            this.expenses.push({
                id: this.expenses.length + 1,
                name: expense.name,
                amount: expense.amount,
                category: expense.category,
                comment: expense.comment
            })
        },
        editExpense(expense: {
            id: number
            name: string
            amount: number
            category: string
            comment: string
        }) {
            const index = this.expenses.findIndex(
                (item) => item.id === expense.id
            )
            this.expenses[index] = expense
        }
    }
})
