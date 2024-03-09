<script setup lang="ts">
import { ref } from "vue";
import { useLoginStore } from "../stores/LoginStore";
const loginStore = useLoginStore();

const passwordType = ref("password");

const changeForm = () => {
  loginStore.activeForm = "login";
};
</script>

<template>
  <div class="form login">
    <div class="form-content">
      <h2>Sign up</h2>

      <form action="#">
        <div class="field-container input-field">
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            class="input"
          />
        </div>

        <div class="field-container input-field">
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            class="input"
          />
        </div>

        <div class="field-container input-field">
          <input
            :type="passwordType"
            placeholder="Password"
            name="password"
            required
            class="password"
          />
          <svg
            class="show-password"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            @click="
              passwordType === 'password'
                ? (passwordType = 'text')
                : (passwordType = 'password')
            "
          >
            <path
              d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
            />
          </svg>
        </div>
        <div class="field-container input-field">
          <input
            :type="passwordType"
            placeholder="Confirm password"
            name="password"
            required
            class="password"
          />
          <svg
            class="show-password"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            @click="
              passwordType === 'password'
                ? (passwordType = 'text')
                : (passwordType = 'password')
            "
          >
            <path
              d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
            />
          </svg>
        </div>
        <div class="field-container button-field">
          <button>Sign up</button>
        </div>

        <div class="form-link">
          <span
            >Already have an account?
            <span class="signup-link" @click="changeForm">Log in</span></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form {
  width: 80%;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}

form .field-container {
  width: 100%;
  height: 40px;
  margin-top: 1.4rem;
  position: relative;
}

.field-container input,
.field-container button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 6px;
}

.field-container input {
  padding: 0 10px;
  background-color: #eff1f7;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.field-container input:focus {
  border: 1px solid var(--secondary-color);
  outline: none;
}

.form-link {
  text-align: center;
  margin-top: 10px;
}

.form-link span,
.forgot-pass {
  font-size: 0.9rem;
}

.signup-link,
.forgot-pass {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 600;
}

.signup-link:hover,
.forgot-pass:hover {
  text-decoration: underline;
  cursor: pointer;
}

.show-password {
  width: 20px;
  position: absolute;
  top: 12px;
  right: 14px;
  fill: grey;
  cursor: pointer;
}

.field-container button {
  background-color: var(--secondary-color);
  color: white;
  transition: background-color 0.3s ease;
}

.field-container button:hover {
  background-color: #257c29;
  cursor: pointer;
}

.radios-container {
  display: flex;
  justify-content: center;
}

.radio-container {
  display: inline-flex;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 2px solid var(--secondary-color);
  margin-top: 1.4rem;
}

.radio-input {
  display: none;
}

.radio-label {
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #eff1f7;
}

.radio-label:not(:last-child) {
  border-right: 2px solid var(--secondary-color);
}

.radio-input:checked + .radio-label {
  background-color: var(--secondary-color);
  color: white;
}
</style>
