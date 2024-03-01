<script setup lang="ts">
    import { ref } from 'vue'
    import NavBar from '../components/NavBar.vue'
    import ExpensesSummary from '../components/ExpensesSummaryComponent.vue'
    import ExpensesTable from '../components/ExpensesTable.vue'

    import CreateExpanseModal from '../components/CreateExpenseModal.vue'
    const modal = ref<InstanceType<typeof CreateExpanseModal>>()
    const showModal = () => modal.value?.show()
    import OverviewCard from '../components/OverviewCard.vue'

    import { computed } from 'vue'
    import { useExpensesStore } from '../stores/ExpensesStore'
    const expensesStore = useExpensesStore()

    const latestExpense = computed(() => {
        return expensesStore.expenses[expensesStore.expenses.length - 1]
    })
</script>

<template>
    <NavBar />
    <NavBar />
    <main>
        <CreateExpanseModal ref="modal" showCancel />
        <button @click="showModal">Create Expense</button>

        <h2 class="over-view-title">Overview</h2>
        <div class="overview-cards-container">
            <OverviewCard
                class="overview-card"
                card-title="Total expenses"
                :card-info="`${expensesStore.totalAmount}kr`"
            />
            <OverviewCard
                class="overview-card"
                card-title="Total transactions"
                :card-info="`${expensesStore.expenses.length}st`"
            />
            <OverviewCard
                v-if="expensesStore.expenses.length > 0"
                class="overview-card"
                card-title="Average cost"
                :card-info="`${(expensesStore.totalAmount / expensesStore.expenses.length).toFixed(2)}kr`"
            />
            <OverviewCard
                v-if="latestExpense"
                class="overview-card"
                card-title="Latest purchase"
                :card-info="`${latestExpense.name} - ${latestExpense.amount}kr`"
            />
        </div>

        <h3 class="table-heading">All Expenses</h3>
        <ExpensesTable />

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
</style>
