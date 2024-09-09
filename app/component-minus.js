import mathStore from './store/math-store.js';

export const ComponentMinus = {
    template: `
    <div>
        <p>Minus Component</p>
        <button @click="minus">Minus -</button>
    </div>
    `,
    data() {
        return {
            mathStore: mathStore()
        }
    },
    methods: {
        minus() {
            this.mathStore.decrement();
        }
    }
};
