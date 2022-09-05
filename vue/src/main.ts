import './main.scss'

import { createApp } from "vue";
import { BaloiseDesignSystem } from "@baloise/design-system-next-components-vue";

import App from "./App.vue";

createApp(App).use(BaloiseDesignSystem).mount("#app");
