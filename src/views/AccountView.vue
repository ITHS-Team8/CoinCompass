<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import ProfileAvatar from '../components/ProfileAvatar.vue';
import AccountSettings from '../components/AccountSettings.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
	<NavBar />
	<main>
		<ProfileAvatar
			userName="userName"
			avatarUrl="https://placehold.co/250"
		/>
		<div class="top-container">
			<PersonalInfo />
			<div class="settings-container">
				<h2>Settings</h2>
				<AccountSettings />
			</div>
		</div>
	</main>
	<FooterComponent />
</template>

<style scoped>
main {
	margin-top: 12vh;
	margin-bottom: 2rem;
}
.top-container {
	display: flex;
	flex-direction: row;
	margin: 1rem 20vw;
	gap: 2rem;
}
.settings-container {
	background-color: #eaeaea;
	padding: 1.4rem;
	width: 100%;
	border-radius: 12px;
}

@media (max-width: 1200px) {
	.top-container {
		margin: 1rem 10vw;
	}
}

@media (max-width: 868px) {
	.top-container {
		flex-direction: column;
		margin: 1rem 5vw;
	}
}
</style>
