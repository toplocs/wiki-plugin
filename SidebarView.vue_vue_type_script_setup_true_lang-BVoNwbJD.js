import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { _ as _sfc_main$1, __tla as __tla_1 } from './SideBar.vue_vue_type_script_setup_true_lang-CypqUeAH.js';
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
        __name: "SidebarView",
        props: {
            parentId: String
        },
        setup (__props) {
            const props = __props;
            console.log("SideBar instance: ", props.parentId);
            if (props.parentId) {
                wikiProvider(props.parentId);
            } else {
                wikiProvider("test");
            }
            return (_ctx, _cache)=>{
                return _openBlock(), _createBlock(_sfc_main$1, {
                    parentId: props.parentId
                }, null, 8, [
                    "parentId"
                ]);
            };
        }
    });
});
export { _sfc_main as _, __tla };
