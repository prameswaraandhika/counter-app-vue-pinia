import { defineStore } from 'pinia';

const service = defineStore('math', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    tripleIncrement() {
      this.count += 3;
    },
    reset() {
      this.count = 0;
    }
  }
});

export default service;