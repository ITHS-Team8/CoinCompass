<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import ProfileAvatar from '../components/ProfileAvatar.vue';
import AccountSettings from '../components/AccountSettings.vue';
import PersonalInfo from '@/components/PersonalInfo.vue';
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
				<h2>Inställningar</h2>
				<AccountSettings />
			</div>
		</div>
	</main>
</template>

<style scoped>
main {
	margin-top: 12vh;
}
.top-container {
	display: flex;
	flex-direction: row;
	margin: 0 10vw;
	gap: 2rem;
}
.settings-container {
	background-color: #9f9d9d;
	padding: 20px;
}
</style>
