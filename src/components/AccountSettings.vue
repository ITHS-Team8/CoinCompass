<script setup lang="ts">
import { ref } from 'vue'

const userPassword = ref('')
const userCurrency = ref('SEK')

const changePassword = () => {
  console.log('Det nya lösenordet är:', userPassword.value)
}

const changeCurrency = () => {
  console.log('Den valda valutan är:', userCurrency.value)
}
</script>

<template>
  <div class="account-settings">
    <div class="settings-section">
      <h2>Ändra Lösenord</h2>
      <input type="password" v-model="userPassword" placeholder="Nytt Lösenord">
      <button @click="changePassword">Spara nytt lösenord</button>
    </div>
    
    <div class="settings-section">
      <h2>Valuta</h2>
      <select v-model="userCurrency">
        <option value="SEK">SEK</option>
        <option value="EUR">EUR</option>
      </select>
      <button @click="changeCurrency">Spara ny valuta</button>
    </div>
  </div>
</template>

<style scoped>
.account-settings {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif; 
}

.settings-section {
  background-color: #f2f2f2; 
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.settings-section h2 {
  margin-bottom: 10px;
  color: #333; 
  font-size: 18px; 
}

input[type=password], select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc; 
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); 
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase; 
  letter-spacing: 1px; 
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}


select {
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  cursor: pointer;
}


input[type=password]::placeholder {
  color: #888;
}
</style>

