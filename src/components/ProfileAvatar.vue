<script setup lang="ts">
defineProps({
    userName: {
        type: String,
        required: true,
        default: 'userName'
    },
    avatarUrl: String,
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
