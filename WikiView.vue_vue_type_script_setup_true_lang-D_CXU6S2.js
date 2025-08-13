import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { _ as _sfc_main$1, __tla as __tla_1 } from './Container.vue_vue_type_script_setup_true_lang-CCU1jpuz.js';
import { _ as _sfc_main$3, __tla as __tla_2 } from './SideBar.vue_vue_type_script_setup_true_lang-CypqUeAH.js';
import { _ as _sfc_main$2, __tla as __tla_3 } from './Main.vue_vue_type_script_setup_true_lang-CxAzH-bS.js';
import { w as wikiProvider, __tla as __tla_4 } from './wikiProvider-DglY5ijj.js';
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
    })()
]).then(async ()=>{
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = await importShared('vue');
    const _hoisted_1 = {
        class: "w-full mr-4"
    };
    _sfc_main = _defineComponent({
        __name: "WikiView",
        props: {
            parentId: String,
            query: Object
        },
        setup (__props) {
            const props = __props;
            if (props.parentId) {
                wikiProvider(props.parentId);
            }
            return (_ctx, _cache)=>{
                return _openBlock(), _createBlock(_sfc_main$1, null, {
                    default: _withCtx(()=>[
                            _createElementVNode("div", _hoisted_1, [
                                _createVNode(_sfc_main$2, {
                                    query: __props.query
                                }, null, 8, [
                                    "query"
                                ])
                            ]),
                            _createVNode(_sfc_main$3, {
                                parentId: props.parentId
                            }, null, 8, [
                                "parentId"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    });
});
export { _sfc_main as _, __tla };
