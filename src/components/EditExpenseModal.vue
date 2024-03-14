<script setup lang="ts">
import { ref } from "vue";
import { getAuth } from "firebase/auth";
import { type Expense } from "@/firebase/database";
import { doc, getDoc, type DocumentData } from "firebase/firestore";
import db from "@/main";



const user = getAuth().currentUser;
const dialog = ref<HTMLDialogElement>();
const visible = ref(false);
const expenseId = ref('');

const showModal = (id: string) => {
  dialog.value?.showModal();
  visible.value = true;
  expenseId.value = id;
};

defineExpose({
  show_modal: showModal,
  close: (returnVal?: string): void => dialog.value?.close(returnVal),
  visible,
});

let expense: Expense;
const expenseName = ref('');
const expenseAmount = ref(0);
const expenseDescription = ref('');
const expenseCategory = ref('');
const expenseDate = ref(new Date());
const expenseModifiedAt = ref(new Date());


async function getUserExpense(expenseId: string): Promise<Expense> {
	const auth = getAuth();
	const userId = auth.currentUser?.uid as string;
	const userDocRef = doc(db, `users/${userId}/expenses/${expenseId}`);
	const userDoc = await getDoc(userDocRef);
	const userData = userDoc.data() as DocumentData;
	return userData as Expense;
}

setTimeout(async () => {
  expense = await getUserExpense(expenseId.value);
  console.log(expense);
}, 2000);
</script>

<template>
  <dialog ref="dialog" @close="visible = false">
    <div class="form-header">
      <h1>Edit Expense</h1>
    </div>
    <form v-if="visible" method="dialog" class="form-container">
      <div>
        <label for="expenseName">Expense</label>
        <input type="text" id="expenseName" name="expenseName" v-model="expenseName" required />
      </div>

      <div>
        <label for="expenseAmount">Amount</label>
        <input type="number" id="expenseAmount" name="expenseAmount" v-model="expenseAmount" required />
      </div>

      <div>
        <label for="expenseDescription">Description</label>
        <textarea
          id="expenseDescription"
          name="expenseDescription"
          required
          v-model="expenseDescription"
        ></textarea>
      </div>

      <div>
        <label for="expenseCategory">Category</label>
        <select id="expenseCategory">
          <option value="none">None</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label for="expenseDate">Date</label>
        <input type="date" id="expenseDate" name="expenseDate" v-model="expenseDate" required />
      </div>

      <button class="form-button">Edit Expense</button>
    </form>
  </dialog>
</template>

<style scoped>
dialog {
  border: none;
  border-radius: 6px;
  position: fixed;
  left: 40%;
  top: 20%;
}

.form-header {
  background-color: orange;
  color: #fff;
  padding: 1rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}
.form-container > div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.form-container > div > input,
textarea,
select {
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  padding: 0.5rem;
}

.form-container > div > input,
textarea,
select:focus {
  outline: none;
}

.form-container > div > textarea {
  height: 4rem;
  resize: none;
  padding: 0.5rem 0.25rem;
  font-family: Montserrat, sans-serif;
  font-size: 0.75rem;
}

.form-container > div > input[type="date"] {
  padding: 0.5rem 0.25rem;
  font-family: Montserrat, sans-serif;
}

.form-button {
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: orange;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.form-button:hover {
  background-color: #ffa500;
}
</style>
