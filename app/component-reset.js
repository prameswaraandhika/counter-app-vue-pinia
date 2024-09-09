import mathStore from './store/math-store.js';

export const ComponentReset = {
    template: `
    <div>
        <p>Reset Component</p>
        <button @click="reset">Reset</button>
    </div>
    `,
    data() {
        return {
            mathStore: mathStore()
        }
    },
    methods: {
        reset() {
            this.mathStore.reset();
        }
    }
};
