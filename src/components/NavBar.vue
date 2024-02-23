<template>
    <nav>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/CoinCompassLogo.png" alt="logo" />
            </router-link>
        </div>
        <ul class="nav-links" :class="{ active: isMenuOpen }">
            <router-link
                v-for="(link, index) in links"
                :key="index"
                active-class="current-nav-item"
                class="nav-link"
                :to="link.url"
                >{{ link.text }}</router-link
            >
        </ul>
        <div
            class="hamburger"
            :class="{ active: isMenuOpen }"
            @click="toggleMenu"
        >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>

    <div class="overlay" v-if="isMenuOpen" @click="toggleMenu"></div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const isMenuOpen = ref(false)

    const links = ref([
        { text: 'Expenses', url: '/expenses' },
        { text: 'Account', url: '/account' },
        { text: 'About', url: '/about' }
    ])

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value
    }
</script>

<style scoped>
    nav {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
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
        gap: 2.4rem;
        list-style: none;
        font-size: 1.2rem;
    }

    .nav-link {
        text-decoration: none;
        color: white;
        padding: 0.8rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 6px;
        transition: all 0.3s ease;
    }

    .nav-link {
        position: relative;
    }

    .nav-link::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 4px;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }

    .nav-link:hover::before {
        visibility: visible;
        transform: scaleX(0.8);
    }

    .current-nav-item {
        font-weight: 500;
    }

    .view-text {
        color: white;
        font-weight: 500;
        font-size: 1.4rem;
    }

    .hamburger {
        display: none;
        cursor: pointer;
    }

    .bar {
        display: block;
        width: 32px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.4s ease-in-out;
        background-color: white;
    }

    @media (max-width: 900px) {
        nav {
            padding-right: 2rem;
            padding-left: 10px;
            box-shadow: none;
        }
        .hamburger {
            display: block;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        .nav-links {
            position: fixed;
            left: -100%;
            top: 70px;
            gap: 0;
            flex-direction: column;
            background-color: var(--primary-color);
            width: 100%;
            text-align: center;
            transition: 0.3s;
        }

        .nav-links.active {
            left: 0px;
        }

        .nav-link {
            background-color: var(--primary-color);
        }
        .nav-link:hover {
            background-color: #325233;
        }

        .view-text {
            display: none;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
        }
    }
</style>
