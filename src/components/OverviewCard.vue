<script setup lang="ts">
defineProps({
    cardTitle: String,
    cardInfo: String,
})
</script>

<template>
    <div class="main-container">
        <div class="title">
            <h1>{{ cardTitle }}</h1>
        </div>
        <div class="content-container">
            <p>{{ cardInfo }}</p>
        </div>
    </div>
</template>

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 12px;
        background-color: #D9D9D9;
    }
    .main-container h1 {
        font-style: italic;
        font-weight: normal;
        font-size: 2rem;
        margin: 0.5rem;
    }
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #C6C4C4;
        border-radius: 12px 12px 0 0;
    }
    .content-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 125px;
    }
    .content-container p {
        font-size: 2rem;
    }
</style>