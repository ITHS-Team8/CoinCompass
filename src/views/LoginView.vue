<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooterComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import SignupComponent from '@/components/SignupComponent.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import router from '@/router';

onAuthStateChanged(getAuth(), (user) => {
	if (user) {
		router.push('/');
	}
});
import { useLoginStore } from '@/stores/LoginStore';
const loginStore = useLoginStore();
</script>

<template>
	<NavBar />
	<div class="container">
		<div class="box">
			<div class="login-side">
				<LoginComponent v-if="loginStore.activeForm === 'login'" />
				<SignupComponent
					v-else-if="loginStore.activeForm === 'signup'"
				/>
			</div>
			<div class="image-side">
				<div class="image-container">
					<img src="../assets/loginImg.png" alt="login image" />
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	background-color: #eff1f7;
	width: 100%;
	height: 95vh;
	margin-top: 8vh;
}
.box {
	display: flex;
	width: 80%;
	height: 80%;
	background-color: lightblue;
	border-radius: 12px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.image-side {
	flex: 1;
	height: 100%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.image-container {
	max-height: 500px;
	max-width: 500px;
	overflow: hidden;
}

.image-side img {
	width: 100%;
	height: 100%;
}
.login-side {
	flex: 1;
	width: 50%;
	height: 100%;
	background-color: #567057;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
}

@media (max-width: 868px) {
	.box {
		width: 90%;
	}
	.image-side {
		display: none;
	}
}
</style>
