<template>
    <section id="hero-section1" class="hero-section">
        <div class="hero-text-container">
            <h1>Track your <span class="green-word">expenses</span></h1>
            <h3>Simplify your spending</h3>
            <p>
                Manage expenses effortlessly! Track spending with ease, bid
                farewell to worries, and embrace peace of mind. Simplify, take
                control & transform your finances today!
            </p>
            <router-link to="/expenses" class="btn1">Expenses</router-link>
        </div>

        <div class="hero-img-container">
            <img src="../assets/hero1.png" alt="Account illustration" />
        </div>
    </section>

    <hr />

    <section id="hero-section2" class="hero-section">
        <div class="hero-img-container">
            <img src="../assets/hero2.png" alt="different apps" />
        </div>

        <div class="hero-text-container">
            <h1><span class="green-word">Create</span> your account</h1>
            <h3>Personalize your experience</h3>
            <p>
                Tailor your experience by creating an account. Enjoy advanced
                features, personalized settings, simple journey to control. Join
                us now!
            </p>
            <div class="btn-container">
                <router-link to="/" class="btn1">Sign up</router-link>
                <!-- Har inga routes än -->
                <router-link to="/" class="btn2">Log in</router-link>
                <!-- Har inga routes än -->
            </div>
        </div>
    </section>

    <hr />

    <section id="hero-section3" class="hero-section">
        <div class="hero-text-container">
            <h1><span class="green-word">Export</span> your expenses</h1>
            <h3>Effortlessly manage your data</h3>
            <p>
                Make your finances easier by exporting expenses. With one click,
                securely download data in different formats. Keep records tidy
                and study spending habits. Start today!
            </p>
            <router-link to="/" class="btn1">Export</router-link>
        </div>

        <div class="hero-img-container">
            <img src="../assets/hero3.png" alt="hero img of globe" />
        </div>
    </section>

    <hr />
</template>

<script setup lang="ts"></script>

<style scoped>
    #hero-section1 {
        margin-top: 10vh;
    }

    #hero-section2 {
        background-color: #eaeaea;
    }
    .hero-section {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10rem;
    }

    .hero-img-container {
        max-height: 410px;
        max-width: 400px;
    }

    .hero-img-container img {
        width: 100%;
        height: 100%;
    }

    .hero-text-container {
        width: 400px;
        text-align: center;
        margin-top: 1rem;
    }

    .hero-text-container h1 {
        font-size: 2.2rem;
        margin-bottom: 0.2rem;
    }

    .hero-text-container h3 {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
        font-weight: 500;
    }

    .hero-text-container p {
        font-size: 1.1rem;
        line-height: 1.4;
        margin-top: 0.4rem;
    }

    .green-word {
        color: var(--secondary-color);
        text-shadow:
            1px 4px 3px rgba(0, 0, 0, 0.1),
            0px -2px 5px rgba(255, 255, 255, 0.1);
    }

    .btn-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .btn-container .btn1 {
        margin: 0rem;
        margin-top: 0.4rem;
        background-color: var(--primary-color);
    }
    .btn1 {
        display: block;
        width: 160px;
        height: 50px;
        text-align: center;
        font-weight: 600;
        padding: 0.8rem 2.5rem;
        margin: auto;
        margin-top: 0.4rem;
        margin-bottom: 1rem;
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

    .btn2 {
        display: block;
        width: 160px;
        height: 50px;
        text-align: center;
        font-weight: 600;
        padding: 0.8rem 2.5rem;
        margin-top: 0.4rem;
        border: 2px solid var(--primary-color);
        border-radius: 30px;
        background-color: #eaeaea;
        color: black;
        text-decoration: none;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: background-color 0.3s ease;
    }

    .btn2:hover {
        background-color: #f5f5f5;
    }

    hr {
        display: none;
        width: 80%;
        margin: 3rem auto;
        border-bottom: 5px solid #38b6ff;
        border-radius: 1rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 900px) {
        #hero-section1 {
            margin-top: 14vh;
        }
        .hero-section {
            flex-direction: column;
            gap: 0;
        }

        .hero-text-container {
            width: 95%;
            text-align: center;
        }

        /* Gör h1 lite mindre för mobile view */
        .hero-text-container h1 {
            font-size: 1.8rem;
            font-weight: 600;
        }
        .hero-text-container h3 {
            font-size: 1.3rem;
        }

        .hero-img-container {
            max-width: 310px;
        }

        hr {
            display: block;
        }

        .btn-container {
            margin-bottom: 2rem;
        }
    }
</style>
