import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { ComponentPlus } from './component-plus.js';
import { ComponentMinus } from './component-minus.js';
import { ComponentView } from './component-view.js';
import { ComponentTriple } from './component-triple.js';
import { ComponentReset } from './component-reset.js';

const app = createApp({
    components: {
        'component-plus': ComponentPlus,
        'component-minus': ComponentMinus,
        'component-view': ComponentView,
        'component-triple': ComponentTriple,
        'component-reset': ComponentReset
    },
    data() {
        return {
            title: "Vue JS",
            message: 'Hello Vue!',
        }
    },
    methods: {
    },
    mounted() {
        document.getElementById('loading').style.display = 'none';
    }
});

app.use(createPinia());
app.mount('#app');