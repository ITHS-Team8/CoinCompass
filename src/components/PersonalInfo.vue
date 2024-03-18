<script setup lang="ts">
import { getUserDetails } from '@/firebase/database';
const userDetails = await getUserDetails();
</script>

<template>
	<div class="container">
		<div class="title-container">
			<h2>Personal Information</h2>
		</div>
		<div class="top-container">
			<h3>Username:</h3>
			<p>{{ userDetails.username }}</p>
			<h3>Email:</h3>
			<p>{{ userDetails.email }}</p>
			<h3>First Name:</h3>
			<p>{{ userDetails.firstName }}</p>
			<h3>Last Name:</h3>
			<p>{{ userDetails.lastName }}</p>
			<h3>Date of Birth:</h3>
			<p>{{ userDetails.dateOfBirth }}</p>
			<h3>Gender:</h3>
			<p>{{ userDetails.gender }}</p>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	min-height: 520px;
	min-width: 260px;
	border-radius: 12px;
	background-color: #eaeaea;
}

h2 {
	padding: 8px;
	font-size: 1.5rem;
}
.top-container {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 1rem;
}
.top-container h3 {
	font-weight: bold;
}
.top-container p {
	margin: 0.5rem;
	font-style: italic;
	font-size: 1.25rem;
}

.title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	background-color: #d5d4d4;
	border-radius: 12px 12px 0 0;
}
.title-container h1 {
	padding: .75rem;
	font-size: 1.25rem;
}

@media (max-width: 868px) {
	.container {
		min-height: 0;
	}
}
</style>
