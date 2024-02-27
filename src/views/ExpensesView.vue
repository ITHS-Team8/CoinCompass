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
                card-title="Total expenses"
                :card-info="`${expensesStore.totalAmount}kr`"
            />
            <OverviewCard
                card-title="Number of transactions"
                :card-info="`${expensesStore.expenses.length}st`"
            />
            <OverviewCard
                card-title="Latest purchase"
                :card-info="`${latestExpense.name} - ${latestExpense.amount}kr`"
            />
            <OverviewCard card-title="'Hej'" card-info="asdfasdfasdf" />
        </div>

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
    }
</style>
