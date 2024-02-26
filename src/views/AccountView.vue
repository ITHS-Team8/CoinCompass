<script setup lang="ts">
    import NavBar from '../components/NavBar.vue'
    import ProfileAvatar from '../components/ProfileAvatar.vue'
</script>

<template>
    <NavBar />
    <main>
        <ProfileAvatar userName="userName" avatarUrl="https://placehold.co/250" />
    </main>
</template>

<style scoped>
    main {
        margin-top: 10vh;
    }
</style>
