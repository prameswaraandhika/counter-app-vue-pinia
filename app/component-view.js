import mathStore from './store/math-store.js';

export const ComponentView = {
    template: `
    <div>
        <p>View Component</p>
        {{count}}
    </div>
    `,
    data() {
        return {
            mathStore: mathStore()
        }
    },
    computed: {
        count() {
            return this.mathStore.count
        }
    },
    methods: {
    }
};
