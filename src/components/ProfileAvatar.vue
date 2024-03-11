<script setup lang="ts">
defineProps({
    avatarUrl: {
        type: String,
        required: true
    }
})
</script>

<template>
    <section class="avatar-container">
        <img class="avatar-image" :src="avatarUrl" alt="avatar" />
        <button class="avatar-button">Change Avatar</button>
    </section>
</template>

<style scoped>
    .avatar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .avatar-image {
        width: 25vh;
        height: 25vh;
        border-radius: 50%;
        margin: 1rem;
    }

    .username {
        margin: .75rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    .avatar-button {
        margin: 1rem;
        padding: 0.75rem 1rem;
        background-color: var(--primary-color);
        color: #FFFF;
        border-radius: 6px;
        border: none;
        font-size: 0.75rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .avatar-button:hover {
        background-color: var(--secondary-color);
        transition: all 0.3s ease-in-out;
    }
</style>

