import mathStore from './store/math-store.js';

export const ComponentPlus = {
    template: `
    <div>
        <p>Plus Component</p>
        <button @click="plus">Plus +</button>
    </div>
    `,
    data() {
        return {
            mathStore: mathStore()
        }
    },
    methods: {
        plus() {
            this.mathStore.increment();
        }
    }
};
