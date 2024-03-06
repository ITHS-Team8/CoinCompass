<template>
    <NavBar />
    <div class="container">
        <div class="box">
            <div class="image-side">
                <div class="image-container">
                    <img src="../assets/loginImg.png" alt="login image" />
                </div>
            </div>
            <div class="login-side">
                <LoginComponent />
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup lang="ts">
    import NavBar from '@/components/NavBar.vue'
    import Footer from '@/components/FooterComponent.vue'
    import LoginComponent from '@/components/LoginComponent.vue'
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
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
    }
</style>
