<script setup lang="ts">
    import { ref } from 'vue'
    

    
    const emit = defineEmits(["search"])
    const search = ref<string>("")
    const updateSearch = () => emit("search", search.value)
</script>

<template>
    <div class="input-container">
        <input type="text" placeholder="Search..." v-model="search" @input="updateSearch()">
    </div>
</template>

<style scoped>

    .input-container {
        width: 90%;
        margin: auto;
        margin-top: 1rem;
    }

    input {
        padding: 8px;
        max-width: 200px;
        font-size: 1.3rem;
        border-radius: 100px;
        display: block;
        border: 1px solid gray;
    }

    @media screen and (max-width: 600px) {
        
        .input-container {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>