<template>
    <section id="hero-section">
        <div class="hero-text-container">
            <h1>Track your expenses</h1>
            <h3>Simplify your spending</h3>
            <p>
                Manage expenses effortlessly! Track spending with ease, bid
                farewell to worries, and embrace peace of mind. Simplify, take
                control & transform your finances today!
            </p>
            <router-link to="/expenses" class="btn1">Expenses</router-link>
        </div>

        <div class="hero-img-container">
            <img src="../assets/hero1.png" alt="hero img of globe" />
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped>
    #hero-section {
        margin-top: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }

    .hero-img-container {
        max-height: 400px;
        max-width: 400px;
    }

    .hero-img-container img {
        width: 100%;
        height: 100%;
    }

    .hero-text-container {
        width: 400px;
        text-align: center;
    }

    .hero-text-container h1 {
        font-size: 2.2rem;
        margin-bottom: 0.2rem;
    }

    .hero-text-container h3 {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
    }

    .hero-text-container p {
        font-size: 1.1rem;
        line-height: 1.4;
        margin-top: 0.4rem;
    }

    .btn1 {
        display: block;
        width: 160px;
        height: 50px;
        text-align: center;
        font-weight: 500;
        padding: 0.8rem 2.5rem;
        margin: auto;
        margin-top: 0.4rem;
        border-radius: 30px;
        background-color: #298a2d;
        color: white;
        text-decoration: none;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: background-color 0.3s ease;
    }

    .btn1:hover {
        background-color: #257c29;
    }

    @media (max-width: 900px) {
        #hero-section {
            flex-direction: column;
            gap: 0;
            margin-top: 6rem;
        }

        .hero-text-container {
            width: 95%;
            text-align: center;
        }

        .hero-img-container {
            max-width: 300px;
            max-height: 300px;
        }
    }
</style>
