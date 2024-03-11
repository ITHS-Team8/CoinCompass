<script setup lang="ts">
    import { ref } from 'vue'
    import { computed } from 'vue'
    import router from '@/router';
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import ExpensesTable from '../components/ExpensesTable.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import OverviewCard from '../components/OverviewCard.vue'

    import CreateExpense from '@/components/CreateExpense.vue'
    import ModalComponent from '@/components/ModalComponent.vue'
    const modal = ref<InstanceType<typeof ModalComponent>>()
    const showModal = () => modal.value?.show()

    import { getUserExpenses } from '@/firebase/database';
    const expenses = await getUserExpenses();

    const latestExpense = computed(() => {
        return expenses[expenses.length - 1]
    })
    const totalAmount = computed(() => {
        return expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
    })
</script>

<template>
    <NavBar />
    <main>
        <ModalComponent ref="modal">
            <CreateExpense />
        </ModalComponent>
        <h2 class="over-view-title">Overview</h2>
        <div class="overview-cards-container">
            <OverviewCard
                class="overview-card"
                card-title="Total expenses"
                :card-info="`${totalAmount}kr`"
            />
            <OverviewCard
                class="overview-card"
                card-title="Total transactions"
                :card-info="`${expenses.length}st`"
            />
            <OverviewCard
                v-if="expenses.length > 0"
                class="overview-card"
                card-title="Average cost"
                :card-info="`${(totalAmount / expenses.length).toFixed(2)}kr`"
            />
            <OverviewCard
                v-if="latestExpense"
                class="overview-card"
                card-title="Latest purchase"
                :card-info="`${latestExpense.expenseName} - ${latestExpense.expenseAmount}kr`"
            />
        </div>

        <h3 class="table-heading" v-if="expenses.length > 0">
            All Expenses
        </h3>
        <div class="no-expenses" v-else>
            <div>
                <h3 class="table-heading">No expenses yet</h3>
                <p>Click the button below to add your first expense</p>
                <button class="add-btn" @click="showModal">Add Your First Expense</button>
            </div>
        </div>
        <ExpensesSummary />
        <ExpensesTable />
    </main>
    <FooterComponent />
</template>

<style scoped>
    main {
        margin-top: 12vh;
    }

    .over-view-title {
        text-align: center;
        font-size: 2.4rem;
        margin-top: 1rem;
    }
    .overview-cards-container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        margin-top: 1rem;
        width: 90%;
        gap: 1.4rem;
        flex-wrap: wrap;
    }

    .overview-card {
        flex-grow: 1;
    }

    .table-heading {
        text-align: center;
        font-size: 2rem;
        margin-top: 2rem;
    }

    .no-expenses {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-bottom: 2rem;
    }

    .no-expenses p {
        margin: 10px;
    }

    .no-expenses > div > button {
        margin: auto;
    }

    .add-btn {
        border: none;
        display: block;
        height: 60px;
        font-size: 1rem;
        text-align: center;
        font-weight: 600;
        padding: 0.8rem 2.5rem;
        border: none;
        border-radius: 30px;
        background-color: var(--secondary-color);
        color: white;
        text-decoration: none;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: background-color 0.3s ease;
    }

    .add-btn:hover {
        background: #257c29;
        cursor: pointer;
    }
</style>
