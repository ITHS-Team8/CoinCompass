<script setup lang="ts">
import { ref } from 'vue';
const dialog = ref<HTMLDialogElement>();
const visible = ref(false);

const showModal = () => {
	dialog.value?.showModal();
	visible.value = true;
};

defineExpose({
	show: showModal,
	close: (returnVal?: string): void => dialog.value?.close(returnVal),
	visible,
});
</script>

<template>
	<dialog ref="dialog" @close="visible = false">
		<div v-if="visible">
			<slot></slot>
		</div>
	</dialog>
</template>

<style scoped>
dialog {
	/* border: none;
	border-radius: 6px;
	position: fixed;
	left: 40%;
	top: 20%; */

	margin: auto;
	border: none;
	border-radius: 12px;
	width: 350px;
}

@media (max-width: 600px) {
	dialog {
		width: 100%;
	}
}
</style>
