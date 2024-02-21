<template>
    <nav class="desktop-nav">
        <div class="logo">
            <router-link to="/">
                <img src="../assets/CoinCompassLogo.png" alt="logo" />
            </router-link>
        </div>
        <div class="view-text">{{ props.view }}</div>
        <ul class="nav-links">
            <router-link to="/expenses" class="nav-link">Expenses</router-link>
            <router-link to="/account" class="nav-link">Account</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
        </ul>
    </nav>

    <div style="height: 1000px"></div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        view: {
            type: String
        }
    })
</script>

<style scoped>
    nav {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1;
        padding-left: 2rem;
        padding-right: 4rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    }

    .logo {
        width: 140px;
        height: auto;
    }

    img {
        width: 100%;
    }

    .nav-links {
        display: flex;
        gap: 3rem;
        list-style: none;
        font-size: 1.4rem;
    }

    .nav-link {
        text-decoration: none;
        color: white;
        background-color: var(--secondary-color);
        padding: 0.8rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 8px;
    }

    .view-text {
        color: white;
        font-weight: 500;
        font-size: 1.5rem;
    }
</style>
