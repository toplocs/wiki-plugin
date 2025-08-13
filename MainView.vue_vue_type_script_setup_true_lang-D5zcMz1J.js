import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { _ as _sfc_main$1, __tla as __tla_1 } from './Main.vue_vue_type_script_setup_true_lang-CxAzH-bS.js';
import { w as wikiProvider, __tla as __tla_2 } from './wikiProvider-DglY5ijj.js';
let _sfc_main;
let __tla = Promise.all([
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
    })()
]).then(async ()=>{
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { openBlock: _openBlock, createBlock: _createBlock } = await importShared('vue');
    _sfc_main = _defineComponent({
        __name: "MainView",
        props: {
            parentId: String
        },
        setup (__props) {
            const props = __props;
            if (props.parentId) {
                wikiProvider(props.parentId);
            }
            return (_ctx, _cache)=>{
                return _openBlock(), _createBlock(_sfc_main$1);
            };
        }
    });
});
export { _sfc_main as _, __tla };
