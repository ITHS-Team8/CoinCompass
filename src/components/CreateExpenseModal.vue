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
    <div>
        <p>CreateExpenseModal</p>
    </div>
</template>

<style scoped>
</style>
