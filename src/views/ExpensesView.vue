<script setup lang="ts">
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import OverviewCard from '../components/OverviewCard.vue'

    import { useExpensesStore } from '../stores/ExpensesStore'
    const expensesStore = useExpensesStore()
</script>

<template>
    <NavBar />
    <main>
        <div class="overview-cards-container">
            <OverviewCard
                card-title="Total expenses"
                :card-info="`${expensesStore.totalAmount}kr`"
            />
            <OverviewCard
                card-title="Number of transactions"
                :card-info="`${expensesStore.expenses.length}st`"
            />
            <OverviewCard card-title="'Hej'" card-info="asdfasdfasdf" />
            <OverviewCard card-title="'Hej'" card-info="asdfasdfasdf" />
        </div>

        <ExpensesSummary />
    </main>
</template>

<style scoped></style>
