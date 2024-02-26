<script setup lang="ts">
defineProps({
    firstName: String,
    lastName: String,
    email: String,
    dateOfBirth: String,
})


</script>

<template>
    <div class="container">
        <div class="title-container">
            <h1>Personal Info</h1>
        </div>
        <div class="info-container">
            <p>First Name: {{ firstName }}</p>
            <p>Last Name: {{ lastName }}</p>
            <p>Date of Birth: {{ dateOfBirth }}</p>
            <p>Email: {{ email }}</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        border-radius: 12px;
        background-color: #D9D9D9;
    }
    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #C6C4C4;
        border-radius: 12px 12px 0 0;
    }
    .title-container h1 {
        padding: 0.5rem;
    }
    .info-container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .info-container p {
        margin: 0.25rem;
    }

</style>
