
<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth } from 'firebase/auth';
    import { onSnapshot, collection, query } from 'firebase/firestore';
    import db from '@/main'
    let totalAmount = ref(0);
    
    const auth = getAuth();
    const userId = auth.currentUser?.uid as string;
    const dbCollection = collection(db, `users/${userId}/expenses`);
    const dbQuery = query(dbCollection);
    onSnapshot(dbQuery, (querySnapshot) => {
        let total = 0;
        querySnapshot.forEach((doc) => {
            total += doc.data().expenseAmount;
        });
        totalAmount.value = total;
    });
</script>

<template>
    <div class="container">
        <div class="text-container">
            <span class="total-text">Total expenses</span>
            <span class="total-text">{{ totalAmount }}kr</span>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin: auto;
        display: flex;
        justify-content: center;
        margin-top: 1.2rem;
    }
    .text-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eaeaea;
        padding: 1.2rem;
        width: 90%;
        border-radius: 12px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .total-text {
        font-weight: 600;
        font-size: 1.2rem;
    }
</style>
