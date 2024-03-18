<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<footer>
		<div class="main">
			<nav>
				<ul>
					<li><RouterLink to="/expenses">Expenses</RouterLink></li>
					<li><RouterLink to="/account">Account</RouterLink></li>
					<li><RouterLink to="/about">About</RouterLink></li>
				</ul>
			</nav>
			<img
				class="coincompassLogo"
				src="../assets/CoinCompassLogoTest.png"
				alt="CoinCompass logo"
			/>
			<ul class="social_links">
				<li>
					<a href=""
						><img
							src="../assets/facebooklogo.png"
							alt="Facebook logo"
					/></a>
				</li>
				<li>
					<a class="middleLink" href=""
						><img
							src="../assets/twitterlogo.png"
							alt="Instagram logo"
					/></a>
				</li>
				<li>
					<a href=""
						><img
							src="../assets/linkedinlogo.png"
							alt="Linkedin logo"
					/></a>
				</li>
			</ul>
			<p class="copyright_text">Copyright @ Team 8</p>
		</div>
	</footer>
</template>

<style scoped>
footer {
	width: 100vw;
	height: 25vh;
	background: var(--primary-color);
}

.main {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 25vh;
	overflow: hidden;
}

a {
	color: white;
	text-decoration: none;
	font-size: 1.5rem;
	line-height: 35px;
}

.social_links li {
	display: inline-flex;
}

.social_links li img {
	height: 40px;
	width: 40px;
}

.middleLink {
	margin: 0 20px 0 20px;
}

.coincompassLogo {
	max-width: 230px;
	max-height: 120px;
}

.copyright_text {
	color: white;
	font-size: 1.2rem;
	text-align: center;
	position: absolute;
	margin-top: 9rem;
}

@media screen and (max-width: 600px) {
	footer {
		height: 55vh;
	}

	.main {
		height: 55vh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.coincompassLogo {
		order: 1;
	}

	nav {
		order: 2;
		text-align: center;
	}

	.social_links {
		order: 3;
		margin-bottom: 30px;
	}

	a {
		font-size: 1.5rem;
	}

	.copyright_text {
		font-size: 0.975rem;
		margin-top: 22rem;
	}
}
</style>
