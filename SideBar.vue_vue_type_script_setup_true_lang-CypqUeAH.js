import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { _ as _sfc_main$2, __tla as __tla_1 } from './Title.vue_vue_type_script_setup_true_lang-DOpwZeSy.js';
import { u as useWiki, __tla as __tla_2 } from './wikiProvider-DglY5ijj.js';
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
    const { defineComponent: _defineComponent$1 } = await importShared('vue');
    const { toDisplayString: _toDisplayString, openBlock: _openBlock$1, createElementBlock: _createElementBlock$1 } = await importShared('vue');
    const _hoisted_1$1 = {
        class: "flex items-center p-2 w-full border-t border-gray-100 dark:border-gray-700 hover:bg-blue-50 text-blue-500 dark:hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
    };
    const _sfc_main$1 = _defineComponent$1({
        __name: "WikiListItem",
        props: {
            title: {
                type: String,
                required: true
            }
        },
        setup (__props) {
            return (_ctx, _cache)=>{
                return _openBlock$1(), _createElementBlock$1("span", _hoisted_1$1, _toDisplayString(__props.title), 1);
            };
        }
    });
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { createTextVNode: _createTextVNode, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock } = await importShared('vue');
    const _hoisted_1 = {
        className: "mb-4 min-w-[200px]"
    };
    const { computed } = await importShared('vue');
    _sfc_main = _defineComponent({
        __name: "SideBar",
        props: {
            parentId: String
        },
        setup (__props) {
            const props = __props;
            const { pages, setPage } = useWiki();
            const href = computed(()=>`/topic/${props.parentId}/wiki`);
            return (_ctx, _cache)=>{
                const _component_router_link = _resolveComponent("router-link");
                return _openBlock(), _createElementBlock("div", _hoisted_1, [
                    _createVNode(_sfc_main$2, null, {
                        default: _withCtx(()=>_cache[0] || (_cache[0] = [
                                _createTextVNode("Wiki pages:", -1)
                            ])),
                        _: 1,
                        __: [
                            0
                        ]
                    }),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(pages), (page)=>{
                        return _openBlock(), _createBlock(_component_router_link, {
                            key: page.id,
                            to: `${href.value}?page=${page.id}`
                        }, {
                            default: _withCtx(()=>[
                                    _createVNode(_sfc_main$1, {
                                        title: page.title || "Untitled"
                                    }, null, 8, [
                                        "title"
                                    ])
                                ]),
                            _: 2
                        }, 1032, [
                            "to"
                        ]);
                    }), 128)),
                    _createVNode(_component_router_link, {
                        to: `${href.value}/create`,
                        class: "flex items-center p-2 w-full border-t border-gray-100 dark:border-gray-700 hover:bg-blue-50 text-blue-500 dark:hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
                    }, {
                        default: _withCtx(()=>_cache[1] || (_cache[1] = [
                                _createTextVNode(" Create a new Page ", -1)
                            ])),
                        _: 1,
                        __: [
                            1
                        ]
                    }, 8, [
                        "to"
                    ])
                ]);
            };
        }
    });
});
export { _sfc_main as _, __tla };
