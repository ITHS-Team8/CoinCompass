<script setup lang="ts">
import { ref } from 'vue';

const userPassword = ref('');
const userPasswordConfirm = ref('');
const userCurrency = ref('SEK');

const changePassword = () => {
	console.log('Det nya lösenordet är:', userPassword.value);
};

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
				v-model="userPassword"
				placeholder="New password"
			/>
			<input
				type="password"
				v-model="userPasswordConfirm"
				placeholder="Confirm password"
			/>
			<button @click="changePassword">Save new password</button>
		</div>

		<div class="settings-section">
			<h2>Currency</h2>
			<select v-model="userCurrency">
				<option value="SEK">SEK</option>
				<option value="EUR">EUR</option>
			</select>
			<button @click="changeCurrency">Save new currency</button>
		</div>
	</div>
</template>

<style scoped>
.account-settings {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	margin: 1rem auto;
}

.settings-section {
	background-color: #d5d4d4;
	padding: 20px;
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
