import { t as tt, __tla as __tla_0 } from './style-DvNSS9UY.js';
import pluginConfig from './__federation_expose_PluginConfig-CfpGTF60.js';
import { _ as _sfc_main$4, __tla as __tla_1 } from './MainView.vue_vue_type_script_setup_true_lang-D5zcMz1J.js';
import { _ as _sfc_main$3, __tla as __tla_2 } from './SidebarView.vue_vue_type_script_setup_true_lang-BVoNwbJD.js';
import { _ as _sfc_main$2, __tla as __tla_3 } from './SettingsView.vue_vue_type_script_setup_true_lang-Wkbb9pKn.js';
import { _ as _sfc_main$1, __tla as __tla_4 } from './WikiView.vue_vue_type_script_setup_true_lang-D_CXU6S2.js';
import { _ as _sfc_main, __tla as __tla_5 } from './CreateView.vue_vue_type_script_setup_true_lang-sXV609ja.js';
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_4;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_5;
        } catch  {}
    })()
]).then(async ()=>{
    const devConfig = {
        pluginConfig,
        components: {
            MainView: _sfc_main$4,
            SidebarView: _sfc_main$3,
            SettingsView: _sfc_main$2,
            WikiView: _sfc_main$1,
            CreateView: _sfc_main
        }
    };
    const app = tt(devConfig);
    app.mount("#plugin-dev");
});
