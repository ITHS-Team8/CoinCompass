<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
import { getUserExpenses, type Expense } from '@/firebase/database';

const expenses: Expense[] = await getUserExpenses();
ChartJS.register(ArcElement, Tooltip, Legend);

let lst: Array<string> = [];

const newExpenses = expenses.map((expense) => ({
	category: expense.expenseCategory,
	amount: expense.expenseAmount,
}));
for (let i = 0; i < newExpenses.length; i++) {
	if (!lst.includes(newExpenses[i].category)) {
		newExpenses.sort((a, b) => b.amount - a.amount);
		lst.push(newExpenses[i].category);
	}
}

const categoryTotalAmount: { [key: string]: number } = {};
/* Add every amount for each category */
newExpenses.forEach((item) => {
	const category = item.category;
	const amount = item.amount;

	if (!categoryTotalAmount[category]) {
		categoryTotalAmount[category] = amount;
	} else {
		categoryTotalAmount[category] += amount;
	}
});

const categoryTotalAmountArray: [string, number][] =
	Object.entries(categoryTotalAmount);
categoryTotalAmountArray.sort((a, b) => b[1] - a[1]);

const sortedData: { [key: string]: number } = {};
categoryTotalAmountArray.forEach(([key, value]) => {
	sortedData[key] = value;
});

const sortedNumbers = Object.values(sortedData).filter(
	(value) => typeof value === 'number'
);

const data = {
	labels: lst,
	datasets: [
		{
			backgroundColor: [
				'#F66D44',
				'#2D87BB',
				'#E6F69D',
				'#AADEA7',
				'#FEAE65',
			],
			data: sortedNumbers,
		},
	],
	chartOptions: {
		responsive: true,
		maintainAspectRatio: true,
	},
};
</script>

<template>
	<div class="main-container">
		<div class="pie-chart">
			<Pie :data="data" :height="300" :width="400" />
		</div>
	</div>
</template>

<style scoped>
.main-container {
	width: 90%;
	display: flex;
	justify-content: center;
	margin: auto;
	margin-top: 1rem;
}

.pie-chart {
	background-color: #eaeaea;
	height: auto;
	width: auto;
	padding: 15px;
	border-radius: 12px;
	text-align: center;
}
</style>
