<script setup lang="ts">
defineProps({
    userName: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        required: true
    }
})
</script>

<template>
    <section>
        <p>{{ userName }}</p>
        <img :src="avatarUrl" alt="avatar" />
        <button>Change Avatar</button>
    </section>
</template>

<style scoped>

</style>
