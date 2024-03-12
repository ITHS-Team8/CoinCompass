import { defineStore } from 'pinia';

export const useLoginStore = defineStore({
	id: 'login',
	state: () => ({
		activeForm: 'login',
	}),
});
