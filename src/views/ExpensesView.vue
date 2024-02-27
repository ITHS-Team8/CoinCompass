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
            <OverviewCard card-title="Hej" :card-info="'alksdja'" />
            <OverviewCard card-title="Hej" :card-info="'alksdja'" />
            <OverviewCard card-title="Hej" :card-info="'alksdja'" />
            <OverviewCard card-title="Hej" :card-info="'alksdja'" />
        </div>

        <ExpensesSummary />
    </main>
</template>

<style scoped></style>
