import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { _ as _sfc_main$1, __tla as __tla_1 } from './Title.vue_vue_type_script_setup_true_lang-DOpwZeSy.js';
import { _ as _sfc_main$2, a as _sfc_main$3, __tla as __tla_2 } from './WikiEdit.vue_vue_type_script_setup_true_lang-BBCA_g4W.js';
import { u as useWiki, __tla as __tla_3 } from './wikiProvider-DglY5ijj.js';
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
    })()
]).then(async ()=>{
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { unref: _unref, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementVNode: _createElementVNode, withModifiers: _withModifiers, createElementBlock: _createElementBlock } = await importShared('vue');
    const _hoisted_1 = {
        class: "p-6 border rounded-lg bg-white border-gray-300 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
    };
    const _hoisted_2 = {
        key: 0
    };
    const _hoisted_3 = {
        key: 0,
        class: "mt-4 wiki-editor"
    };
    const _hoisted_4 = {
        class: "mt-2 space-x-2"
    };
    const _hoisted_5 = {
        key: 1,
        class: "wiki-display"
    };
    const _hoisted_6 = [
        "innerHTML"
    ];
    const _hoisted_7 = {
        key: 1
    };
    const { ref, watchEffect } = await importShared('vue');
    _sfc_main = _defineComponent({
        __name: "Main",
        props: {
            query: {}
        },
        setup (__props) {
            const props = __props;
            const { wiki, setPage, editPage } = useWiki();
            const form = ref(null);
            const isEditing = ref(false);
            const successMessage = ref("");
            const errorMessage = ref("");
            const content = ref("");
            const editContent = ()=>{
                isEditing.value = true;
            };
            const cancelEdit = ()=>{
                isEditing.value = false;
            };
            const onSubmit = async ()=>{
                try {
                    const formData = new FormData(form.value ?? void 0);
                    if (wiki.value?.title) {
                        formData.append("title", wiki.value.title);
                    }
                    formData.append("content", JSON.stringify(content.value));
                    const node = await editPage(formData);
                    successMessage.value = "Wiki content was saved successfully!";
                } catch (error) {
                    console.error(error);
                    errorMessage.value = error instanceof Error ? error.message : String(error);
                }
            };
            watchEffect(async ()=>{
                if (props.query?.page) {
                    await setPage(props.query.page);
                }
            });
            watchEffect(async ()=>{
                successMessage.value = "";
                errorMessage.value = "";
                if (wiki.value?.content) {
                    try {
                        content.value = JSON.parse(wiki.value.content);
                    } catch (e) {
                        content.value = "";
                    }
                } else {
                    content.value = "";
                }
            });
            return (_ctx, _cache)=>{
                return _openBlock(), _createElementBlock("div", _hoisted_1, [
                    _createVNode(_sfc_main$1, null, {
                        default: _withCtx(()=>[
                                _createTextVNode(_toDisplayString(_unref(wiki)?.title), 1)
                            ]),
                        _: 1
                    }),
                    content.value.length ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
                        isEditing.value ? (_openBlock(), _createElementBlock("div", _hoisted_3, [
                            successMessage.value ? (_openBlock(), _createBlock(_sfc_main$2, {
                                key: 0,
                                color: "green"
                            }, {
                                default: _withCtx(()=>[
                                        _createTextVNode(_toDisplayString(successMessage.value), 1)
                                    ]),
                                _: 1
                            })) : _createCommentVNode("", true),
                            errorMessage.value ? (_openBlock(), _createBlock(_sfc_main$2, {
                                key: 1,
                                color: "red"
                            }, {
                                default: _withCtx(()=>[
                                        _createTextVNode(_toDisplayString(errorMessage.value), 1)
                                    ]),
                                _: 1
                            })) : _createCommentVNode("", true),
                            _createElementVNode("form", {
                                ref_key: "form",
                                ref: form,
                                onSubmit: _withModifiers(onSubmit, [
                                    "prevent"
                                ]),
                                class: "w-full bg-white-500"
                            }, [
                                _createVNode(_sfc_main$3, {
                                    modelValue: content.value,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>content.value = $event)
                                }, null, 8, [
                                    "modelValue"
                                ]),
                                _createElementVNode("div", _hoisted_4, [
                                    _cache[1] || (_cache[1] = _createElementVNode("button", {
                                        type: "submit",
                                        class: "px-4 py-2 rounded font-semibold transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white"
                                    }, " Save ", -1)),
                                    _createElementVNode("button", {
                                        type: "button",
                                        class: "px-4 py-2 rounded font-semibold transition-colors duration-200 bg-gray-500 hover:bg-gray-600 text-white",
                                        onClick: _withModifiers(cancelEdit, [
                                            "prevent"
                                        ])
                                    }, " Cancel ")
                                ])
                            ], 544)
                        ])) : (_openBlock(), _createElementBlock("div", _hoisted_5, [
                            _createElementVNode("div", {
                                innerHTML: content.value,
                                className: "mt-4 custom-editor"
                            }, null, 8, _hoisted_6),
                            _createElementVNode("button", {
                                class: "mt-4 px-4 py-2 rounded font-semibold transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white",
                                onClick: editContent
                            }, " Edit the Wiki ")
                        ]))
                    ])) : (_openBlock(), _createElementBlock("span", _hoisted_7, " There is no content available "))
                ]);
            };
        }
    });
});
export { _sfc_main as _, __tla };
