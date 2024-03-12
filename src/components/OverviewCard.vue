<script setup lang="ts">
defineProps({
	cardTitle: String,
	cardInfo: String,
});
</script>

<template>
	<div class="main-container">
		<div class="title">
			<h3>{{ cardTitle }}</h3>
		</div>
		<div class="content-container">
			<p>{{ cardInfo }}</p>
		</div>
	</div>
</template>

<style scoped>
.main-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-radius: 12px;
	background-color: #d9d9d9;
	background-color: #eaeaea; /* Testing */
	min-width: 200px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; /* Testing */
}
.main-container h3 {
	font-style: italic;
	font-weight: normal;
	font-weight: 500; /* Testing */
	font-size: 1.2rem;
	margin: 0.5rem;
}
.title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #c6c4c4;
	background-color: #d5d4d4; /* testing */
	border-radius: 12px 12px 0 0;
}
.content-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 125px;
	height: 100px; /* Testing */
}
.content-container p {
	font-size: 1.6rem;
}

@media (max-width: 800px) {
	.content-container {
		height: 40px;
	}
}
</style>
