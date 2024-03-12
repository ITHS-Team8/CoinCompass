<script setup lang="ts">
import { ref, computed } from 'vue';
import {
	getUserExpenses,
	deleteUserExpense,
	type Expense,
} from '@/firebase/database';

const expenses: Expense[] = await getUserExpenses();

const hoveredIndex = ref<number | null>(null);
const tooltips = ref<{ show: boolean; comment: string }[]>([]);

function showTooltip(index: number, comment: string) {
	hoveredIndex.value = index;
	tooltips.value[index] = { show: true, comment };
}
function hideTooltip() {
	hoveredIndex.value = null;
}

const deleteUserExpenseAndElement = (expenseId: string) => {
	const htmlElement = document.getElementById(expenseId);
	deleteUserExpense(expenseId).finally(() => {
		htmlElement?.remove();
	});
};

import { getAuth } from 'firebase/auth';
import { onSnapshot, collection, query } from 'firebase/firestore';
import db from '@/main';
const auth = getAuth();
const userId = auth.currentUser?.uid as string;
const dbCollection = collection(db, `users/${userId}/expenses`);
const dbQuery = query(dbCollection);
onSnapshot(dbQuery, (querySnapshot) => {
	querySnapshot.forEach((doc) => {
		const existingExpense = expenses.find(
			(expense) => expense.expenseId === doc.id
		);
		if (!existingExpense) {
			expenses.push(doc.data() as Expense);
		}
	});
});

import ExpensesSummary from './ExpensesSummaryComponent.vue';
import CreateExpense from './CreateExpense.vue';
import ModalComponent from '../components/ModalComponent.vue';
const createExpense = ref<InstanceType<typeof ModalComponent>>();
const showCreateModal = () => createExpense.value?.show();

import EditExpenseModal from './EditExpenseModal.vue';
const editExpenseModal = ref<InstanceType<typeof EditExpenseModal>>();
const showEditModal = (id: string) => editExpenseModal.value?.show_modal(id);

import SearchExpense from '../components/SearchExpense.vue';
const search = ref<string>('');
const handleSearch = (query: string) => (search.value = query);

const filteredItems = computed(() => {
	const query = search.value.toLowerCase();
	return expenses.filter((item) =>
		item.expenseName.toLowerCase().includes(query)
	);
});
</script>

<template>
	<ModalComponent ref="createExpense" showCancel>
		<CreateExpense />
	</ModalComponent>
	<SearchExpense @search="handleSearch" />

	<div v-if="expenses.length > 0" class="main-container">
		<div class="titles-container">
			<div class="titles">
				<p class="name">Name</p>
				<p class="sum">Sum</p>
				<p class="category">Category</p>
				<p class="name">Date</p>
				<p class="comment">Comment</p>
			</div>
		</div>

		<div
			class="expenseTable-items"
			v-for="(expense, index) in filteredItems"
			:key="index"
			:id="expense.expenseId"
		>
			<div class="item-info-container">
				<p>{{ expense.expenseName }}</p>
				<p>{{ expense.expenseAmount }}kr</p>
				<p>{{ expense.expenseCategory }}</p>
				<p>{{ expense.createdAt }}</p>
				<div
					class="tooltip"
					v-if="hoveredIndex === index && tooltips[index].show"
				>
					{{ tooltips[index]?.comment }}
				</div>
				<div
					class="comment-icon"
					@mouseenter="showTooltip(index, expense.expenseDescription)"
					@mouseleave="hideTooltip"
				>
					<p class="item4">
						<svg
							style="height: 30px"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
							/>
						</svg>
					</p>
				</div>
			</div>
			<div class="btn-container">
				<button class="edit-btn" type="button" @click="showEditModal(expense.expenseId)">
					<svg
						style="height: 24px"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
						/>
					</svg>
				</button>
				<button
					class="delete-btn"
					type="button"
					@click="deleteUserExpenseAndElement(expense.expenseId)"
				>
					<svg
						style="height: 24px"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="b">
			<button class="add-btn" @click="showCreateModal">
				Add expense
			</button>
		</div>
	</div>

	<!--MOBIL-->
	<table v-if="expenses.length > 0">
		<thead>
			<tr>
				<th>Name</th>
				<th class="sum-th">Sum</th>
				<th>Category</th>
				<th>Buttons</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="expense in filteredItems">
				<td class="name-td">{{ expense.expenseName }}</td>
				<td class="sum-td">{{ expense.expenseAmount }}kr</td>
				<td>{{ expense.expenseCategory }}</td>
				<td>
					<div class="mobile-btn-container">
						<button class="edit-btn" type="button" @click="">
							<svg
								style="height: 20px"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
								/>
							</svg></button
						><button
							class="delete-btn"
							type="button"
							@click="deleteUserExpense(expense.expenseId)"
						>
							<svg
								style="height: 20px"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
								/>
							</svg>
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<button
		v-if="expenses.length > 0"
		class="add-btn hide-btn"
		type="button"
		@click="showCreateModal"
	>
		Add expense
	</button>
	<ExpensesSummary />
</template>

<style scoped>
.tooltip {
	position: absolute;
	background-color: #f9f9f9;
	padding: 0.6rem;
	border-radius: 12px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	z-index: 1;
	margin-right: 2rem;
	max-width: 400px;
	right: 20px;
}

.b {
	width: 90%;
	margin: auto;
	margin-top: 1rem;
}

h2 {
	text-align: center;
	font-size: 2rem;
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
.main-container {
	height: auto;
	width: 90%;
	background: #eaeaea;
	margin: 0 auto;
	margin-top: 1.1rem;
	border-radius: 12px;
	padding: 2rem 0;
}

.titles {
	width: 80%;
	display: inline-flex;
	justify-content: space-between;
	margin-left: 4.3rem;
}
.titles p {
	font-size: 1.1rem;
	font-weight: 600;
}

.expenseTable-items {
	width: 90%;
	height: auto;
	margin: auto;
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.item-info-container {
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	background-color: #d5d4d4;
	border-radius: 20px;
	padding: 20px 2px;
	position: relative;
}

.expenseTable-items p {
	width: 120px;
	margin-left: 1rem;
	font-weight: 500;
}

.item4 {
	text-align: right;
	padding-right: 1.1rem;
}

.btn-container {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-left: 1rem;
}

.edit-btn {
	height: 40px;
	width: 40px;
	border: none;
	background: #c7bd6a;
	border-radius: 12px;
	cursor: pointer;
}

.delete-btn {
	height: 40px;
	width: 40px;
	border: none;
	background: #fb5555;
	border-radius: 12px;
	cursor: pointer;
}

.hide-btn {
	display: none;
}

table {
	display: none;
}

@media screen and (max-width: 600px) {
	.main-container,
	.no-expenses {
		display: none;
	}

	table {
		border-collapse: collapse;
		border: 1px solid gray;
		font-size: 1rem;
		text-align: left;
		width: 100%;
		margin: 0 auto;
		margin-top: 1rem;
		font-weight: 500;
		display: table;
	}

	th,
	td {
		padding: 8px 10px;
		font-size: 14px;
	}

	th {
		border-bottom: 1px solid gray;
	}

	tr {
		border-bottom: 1px solid gray;
	}

	tbody > tr:nth-of-type(even) {
		background-color: #eaeaea;
	}

	.mobile-btn-container {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.delete-btn {
		height: 35px;
		width: 35px;
	}

	.edit-btn {
		height: 35px;
		width: 35px;
	}

	.add-btn {
		width: 90%;
		height: 50px;
		margin: 0 auto;
		margin-top: 1rem;
	}

	.hide-btn {
		display: block;
	}
}

@media screen and (min-width: 600px) and (max-width: 1000px) {
	.main-container,
	.no-expenses {
		display: none;
	}

	table {
		border-collapse: collapse;
		border: 1px solid gray;
		font-size: 1rem;
		text-align: left;
		width: 90%;
		margin: 0 auto;
		margin-top: 2rem;
		font-weight: 500;
		display: table;
	}

	th,
	td {
		padding: 8px 10px;
	}

	th {
		border-bottom: 1px solid gray;
	}

	tr {
		border-bottom: 1px solid gray;
	}

	tbody > tr:nth-of-type(even) {
		background-color: #eaeaea;
	}

	.mobile-btn-container {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.delete-btn {
		height: 35px;
		width: 35px;
	}

	.edit-btn {
		height: 35px;
		width: 35px;
	}

	.add-btn {
		width: 90%;
		height: 50px;
		margin: 0 auto;
		margin-top: 1rem;
	}

	.hide-btn {
		display: block;
	}
}
</style>
