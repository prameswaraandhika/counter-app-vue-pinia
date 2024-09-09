import mathStore from './store/math-store.js';

export const ComponentTriple = {
    template: `
    <div>
        <p>Triple Plus Component</p>
        <button @click="triplePlus">Plus 3 Times</button>
    </div>
    `,
    data() {
        return {
            mathStore: mathStore()
        }
    },
    methods: {
        triplePlus() {
            this.mathStore.tripleIncrement();
        }
    }
};
