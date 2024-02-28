<script setup lang="ts">
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import OverviewCard from '../components/OverviewCard.vue'

    import { useExpensesStore } from '../stores/ExpensesStore'
    const expensesStore = useExpensesStore()

    const latestExpense =
        expensesStore.expenses[expensesStore.expenses.length - 1]
</script>

<template>
    <NavBar />
    <main>
        <h2 class="over-view-title">Overview</h2>
        <div class="overview-cards-container">
            <OverviewCard
                class="overview-card"
                card-title="Total expenses"
                :card-info="`${expensesStore.totalAmount}kr`"
            />
            <OverviewCard
                class="overview-card"
                card-title="Number of transactions"
                :card-info="`${expensesStore.expenses.length}st`"
            />
            <OverviewCard
                class="overview-card"
                card-title="Average cost"
                :card-info="`${(expensesStore.totalAmount / expensesStore.expenses.length).toFixed(2)}kr`"
            />
            <OverviewCard
                class="overview-card"
                card-title="Latest purchase"
                :card-info="`${latestExpense.name} - ${latestExpense.amount}kr`"
            />
        </div>

        <h3 class="table-heading">All Expenses</h3>

        <ExpensesSummary />
    </main>
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
        gap: 2rem;
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
</style>
