<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BudgetCard from '../BudgetCard.vue'; 
</script>

<template>
	<NavBar />
	<main>
		<div class="container">
			<h2>Our <span class="green-text">mission</span></h2>
			<h4><span class="green-text">Simplify</span> saving money</h4>
			<p class="about-text">
				CoinCompass is an expense tracker designed to help you manage
				your finances effectively. Our goal is to simplify the process
				of tracking expenses, enabling our customers to save money and
				gain a clear overview of their finances.
			</p>
		</div>

		<div class="img-container">
			<img src="../assets/about-img.png" alt="analytics images" />
		</div>

		<h3>Customers <span class="green-text">opinion</span></h3>
		<div class="about-ratings">
			<div class="testimonial">
				<div class="review-img">
					<img
						src="../assets/testimonial1.png"
						alt="profile pic on customer"
					/>
				</div>
				<div>
					<p>
						"CoinCompass redefines expense management, offering
						intuitive features for effortless financial control."
					</p>
					<p class="testimonial-name">William Mattsson - CEO</p>
				</div>
			</div>
			<div class="testimonial">
				<div class="review-img">
					<img
						src="../assets/testimonial2.png"
						alt="profile pic on customer"
					/>
				</div>
				<div>
					<p>
						"CoinCompass made saving a breeze! Its intuitive
						features streamlined finances. Recommendations!"
					</p>
					<p class="testimonial-name">William Mattsson - CEO</p>
				</div>
			</div>
		</div>
		<hr />
	</main>
	<FooterComponent />
</template>

<style scoped>
main {
	margin-top: 14vh;
}
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 800px;
	margin: 0 auto;
}
.container p {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
}

h2 {
	font-size: 2.2rem;
	margin-bottom: 0.2rem;
}
h4 {
	font-size: 1.4rem;
	margin-bottom: 0.7rem;
	font-weight: 500;
}
.about-text {
	font-size: 1.2rem;
}
.green-text {
	color: green;
}
.img-container {
	margin: 2rem auto;
	width: 90%;
}
.img-container img {
	width: 100%;
}
.about-ratings {
	display: flex;
	width: 90%;
	margin: 1.6rem auto;
	text-align: left;
	gap: 2rem;
}
h3 {
	font-size: 1.6rem;
	font-weight: 600;
	text-align: center;
}
.testimonial .review-img {
	margin-left: 5px;
	margin-right: 28px;
	width: 100px;
	height: 100px;
	overflow: hidden;
}
.testimonial .review-img img {
	width: 50px;
	height: 50px;
	width: 100%;
	border-radius: 50%;
}
.testimonial {
	width: 50%;
	background-color: #eaeaea;
	border-radius: 12px;
	padding: 1rem;
	display: flex;
}
.testimonial p {
	font-weight: 500;
	line-height: 1.8rem;
}
.testimonial-name {
	font-size: 1.2rem;
	font-weight: 500;
}
hr {
	width: 90%;
	margin: 2rem auto;
	border: 4px solid #eaeaea;
	border-radius: 12px;
}
@media (max-width: 868px) {
	.about-text {
		width: 90%;
		background-color: #eaeaea;
		border-radius: 12px;
		padding: 10px;
		font-size: 1rem;
		line-height: 22px;
		letter-spacing: 1px;
		text-align: left;
	}
	.about-ratings {
		flex-direction: column;
		gap: 1rem;
	}
	.testimonial {
		width: 100%;
	}
}
</style>
