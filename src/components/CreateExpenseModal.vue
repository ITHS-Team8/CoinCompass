<script setup lang="ts">
    import { ref } from "vue";
    const dialog = ref<HTMLDialogElement>();

    const props = defineProps({
      classes: {
        type: String,
        default: "",
      },
    })

    const visible = ref(false);

    const showModal = () => {
      dialog.value?.showModal();
      visible.value = true;
    };

    defineExpose({
      show: showModal,
      close: (returnVal?: string): void => dialog.value?.close(returnVal),
      visible,
    })
</script>

<template>
  <dialog ref="dialog" @close="visible = false">
    <form v-if="visible" method="dialog" class="form-container">
        <h1>Create Expense</h1>
        <label for="expenseName">Expense</label>
        <input type="text" id="expenseName" name="expenseName" required />

        <label for="expenseAmount">Amount</label>
        <input type="number" id="expenseAmount" name="expenseAmount" required />

        <label for="expenseDescription">Description</label>
        <textarea id="expenseDescription" name="expenseDescription" required></textarea>
        

        <label for="expenseCategory">Category</label>
        <select id="expenseCategory">
            <option value="none">None</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
        </select>

        <label for="expenseDate">Date</label>
        <input type="date" id="expenseDate" name="expenseDate" required />
    </form>
  </dialog>
</template>

<style scoped>
</style>
