<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['search']);
const search = ref<string>('');
const updateSearch = () => emit('search', search.value);
</script>

<template>
	<div class="search-container">
		<div class="input-container">
			<p>Search for specific expenses</p>
			<input
				type="text"
				placeholder="Search..."
				v-model="search"
				@input="updateSearch()"
			/>
		</div>
	</div>
</template>

<style scoped>
.search-container {
	width: 100%;
	display: flex;
	justify-content: center;
}
.input-container {
	width: 90%;
	max-width: 90%;
	margin: auto;
	margin-top: 1rem;
	padding: 1rem;
	background-color: #eaeaea;
	border-radius: 12px;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

p {
	font-size: 1.1rem;
	font-weight: 500;
	margin: auto;
	margin-bottom: 8px;
}

input {
	padding: 8px;
	max-width: 300px;
	font-size: 1.1rem;
	border-radius: 20px;
	display: block;
	border: 2px solid gray;
	border: 2px solid transparent;
	margin: auto;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

@media screen and (max-width: 600px) {
	.input-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
}
</style>
