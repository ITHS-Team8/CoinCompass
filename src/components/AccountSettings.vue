<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, reauthenticateWithCredential } from 'firebase/auth';
import { updatePassword } from 'firebase/auth';

const auth = getAuth();
const userOldPassword = ref('');
const userNewPassword = ref('');
const userNewPasswordConfirm = ref('');
const userCurrency = ref('SEK');

function updateUserPassword(
	oldPassword: string,
	newPassword: string,
	newPasswordConfirm: string
) {
	if (oldPassword === '' || newPassword === '' || newPasswordConfirm === '') {
		alert('Please fill in all fields');
		return;
	}

	if (newPassword !== newPasswordConfirm) {
		alert('New passwords do not match');
		return;
	}
	const user = auth.currentUser;
	if (user) {
		updatePassword(user, newPassword)
			.then(() => {
				alert('Password updated');
			})
			.catch((error) => {
				alert(error.message);
			});
	}
}

const changeCurrency = () => {
	console.log('Den valda valutan är:', userCurrency.value);
};
</script>

<template>
	<div class="account-settings">
		<div class="settings-section">
			<h2>Change password</h2>
			<input
				type="password"
				v-model="userOldPassword"
				placeholder="Old password"
			/>
			<input
				type="password"
				v-model="userNewPassword"
				placeholder="New password"
			/>
			<input
				type="password"
				v-model="userNewPasswordConfirm"
				placeholder="Confirm new password"
			/>
			<button
				@click="
					updateUserPassword(
						userOldPassword,
						userNewPassword,
						userNewPasswordConfirm
					)
				"
			>
				Change Password
			</button>
		</div>
<!--
	<div class="settings-section">
		<h2>Currency</h2>
		<select v-model="userCurrency">
			<option value="SEK">SEK</option>
			<option value="EUR">EUR</option>
		</select>
		<button @click="changeCurrency">Save new currency</button>
	</div>
</div>
-->
</div>
</template>

<style scoped>
.account-settings {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	margin-top: 0.6rem;
}

.settings-section {
	background-color: #d5d4d4;
	padding: 1rem;
	margin-bottom: 20px;
	border-radius: 8px;
}

.settings-section h2 {
	margin-bottom: 10px;
	color: #333;
	font-size: 18px;
}

input[type='password'],
select {
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 6px;
	outline: none;
}

input[type='password']:focus {
	border: 2px solid black;
}

button {
	background-color: #298a2d;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-weight: bold;
	transition: background-color 0.3s ease;
}

button:hover {
	background-color: #257c29;
}

select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
	background-repeat: no-repeat;
	background-position-x: 100%;
	background-position-y: 50%;
	cursor: pointer;
}
</style>
