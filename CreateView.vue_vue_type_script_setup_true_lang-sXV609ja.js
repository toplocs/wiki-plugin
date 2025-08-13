import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { _ as _sfc_main$6, __tla as __tla_1 } from './Container.vue_vue_type_script_setup_true_lang-CCU1jpuz.js';
import { _ as _sfc_main$7, __tla as __tla_2 } from './Title.vue_vue_type_script_setup_true_lang-DOpwZeSy.js';
import { u as useRoute, __tla as __tla_3 } from './vue-router-D-i8VYmx.js';
import { _ as _sfc_main$4, a as _sfc_main$5, __tla as __tla_4 } from './WikiEdit.vue_vue_type_script_setup_true_lang-BBCA_g4W.js';
import { u as useWiki, w as wikiProvider, __tla as __tla_5 } from './wikiProvider-DglY5ijj.js';
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
    })(),
    (()=>{
        try {
            return __tla_5;
        } catch  {}
    })()
]).then(async ()=>{
    const { defineComponent: _defineComponent$3 } = await importShared('vue');
    const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, openBlock: _openBlock$3, createElementBlock: _createElementBlock$2 } = await importShared('vue');
    const { computed } = await importShared('vue');
    const _sfc_main$3 = _defineComponent$3({
        __name: "Card",
        props: {
            className: {
                type: String,
                default: ""
            }
        },
        setup (__props) {
            const props = __props;
            const cardClass = computed(()=>`relative w-full text-left ring-1 rounded-lg p-6 bg-white dark:bg-gray-800 ring-gray-300 dark:ring-gray-700 shadow-md dark:shadow-lg border-transparent dark:border-gray-600 dark:text-white ${props.className}
`);
            return (_ctx, _cache)=>{
                return _openBlock$3(), _createElementBlock$2("div", {
                    class: _normalizeClass(cardClass.value)
                }, [
                    _renderSlot(_ctx.$slots, "default")
                ], 2);
            };
        }
    });
    const { defineComponent: _defineComponent$2 } = await importShared('vue');
    const { createElementVNode: _createElementVNode$2, openBlock: _openBlock$2, createElementBlock: _createElementBlock$1 } = await importShared('vue');
    const _hoisted_1$2 = {
        class: "relative w-full flex items-center min-w-[100px] outline-none rounded-md transition duration-100 border bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
    };
    const _hoisted_2 = [
        "id",
        "type",
        "name",
        "placeholder",
        "disabled",
        "value"
    ];
    const _sfc_main$2 = _defineComponent$2({
        __name: "TextInput",
        props: {
            id: {
                type: String,
                required: false
            },
            type: {
                type: String,
                default: "text"
            },
            name: {
                type: String,
                required: false
            },
            placeholder: {
                type: String,
                default: ""
            },
            disabled: {
                type: Boolean,
                default: false
            },
            modelValue: {
                type: String,
                default: ""
            }
        },
        emits: [
            "update:modelValue"
        ],
        setup (__props, { emit: __emit }) {
            return (_ctx, _cache)=>{
                return _openBlock$2(), _createElementBlock$1("div", _hoisted_1$2, [
                    _createElementVNode$2("input", {
                        id: __props.id,
                        type: __props.type,
                        name: __props.name,
                        placeholder: __props.placeholder,
                        disabled: __props.disabled,
                        value: __props.modelValue,
                        onInput: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit("update:modelValue", $event.target.value)),
                        class: "w-full bg-transparent focus:outline-none focus:ring-0 border-none text-sm rounded-lg transition duration-100 py-2 text-gray-900 dark:text-white pr-3 pl-3 placeholder-gray-400 dark:placeholder-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    }, null, 40, _hoisted_2)
                ]);
            };
        }
    });
    const { defineComponent: _defineComponent$1 } = await importShared('vue');
    const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode$1, withCtx: _withCtx$1, openBlock: _openBlock$1, createBlock: _createBlock$1, createCommentVNode: _createCommentVNode, createElementVNode: _createElementVNode$1, createVNode: _createVNode$1, withModifiers: _withModifiers, createElementBlock: _createElementBlock } = await importShared('vue');
    const _hoisted_1$1 = {
        className: "mb-2"
    };
    const { ref } = await importShared('vue');
    const _sfc_main$1 = _defineComponent$1({
        __name: "WikiForm",
        setup (__props) {
            useRoute();
            const { pages, createPage } = useWiki();
            const form = ref(null);
            const successMessage = ref("");
            const errorMessage = ref("");
            ref([]);
            ref([]);
            const content = ref(`<h2>
      Welcome to the Wiki
    </h2>

    <p>
      This is a simple <em>wiki</em> page made for your <strong>text editor</strong>. It includes basic text styles that you would expect from any modern editor. But there’s more than just text. Take a look at the lists below:
    </p>

    <ul>
      <li>
        A standard bullet point …
      </li>
      <li>
        … with two items, just for fun.
      </li>
    </ul>

    <p>
      Pretty cool, right? But that’s not all! Here’s a code block for you to try:
    </p>

    <pre><code class="language-js">function greet() {
      console.log("Hello, world!");
    }</code></pre>

    <p>
      Nice, isn’t it? Don’t stop there, explore more features by trying out different options. Maybe even create some more code or lists of your own.
    </p>

    <blockquote>
      "This wiki page looks fantastic, keep up the good work!" 👏
      <br />
      — Your Mentor
    </blockquote>

  `);
            const onSubmit = async ()=>{
                try {
                    if (successMessage.value.length) return;
                    const formData = new FormData(form.value ?? void 0);
                    formData.append("content", JSON.stringify(content.value));
                    const node = await createPage(formData);
                    successMessage.value = "Wiki content was saved successfully!";
                } catch (error) {
                    console.error(error);
                    errorMessage.value = error instanceof Error ? error.message : String(error);
                }
            };
            return (_ctx, _cache)=>{
                return _openBlock$1(), _createElementBlock("form", {
                    ref_key: "form",
                    ref: form,
                    onSubmit: _withModifiers(onSubmit, [
                        "prevent"
                    ])
                }, [
                    successMessage.value ? (_openBlock$1(), _createBlock$1(_sfc_main$4, {
                        key: 0,
                        color: "green"
                    }, {
                        default: _withCtx$1(()=>[
                                _createTextVNode$1(_toDisplayString(successMessage.value), 1)
                            ]),
                        _: 1
                    })) : _createCommentVNode("", true),
                    errorMessage.value ? (_openBlock$1(), _createBlock$1(_sfc_main$4, {
                        key: 1,
                        color: "red"
                    }, {
                        default: _withCtx$1(()=>[
                                _createTextVNode$1(_toDisplayString(errorMessage.value), 1)
                            ]),
                        _: 1
                    })) : _createCommentVNode("", true),
                    _createElementVNode$1("div", _hoisted_1$1, [
                        _cache[1] || (_cache[1] = _createElementVNode$1("label", {
                            for: "title",
                            class: "block text-gray-900 dark:text-gray-100 font-medium text-sm mb-2"
                        }, " Wiki Page Title ", -1)),
                        _createVNode$1(_sfc_main$2, {
                            type: "text",
                            id: "title",
                            name: "title",
                            autoComplete: "title",
                            placeholder: "The wiki page title"
                        })
                    ]),
                    _createVNode$1(_sfc_main$5, {
                        modelValue: content.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>content.value = $event)
                    }, null, 8, [
                        "modelValue"
                    ]),
                    _cache[2] || (_cache[2] = _createElementVNode$1("div", {
                        class: "mt-2 space-x-2"
                    }, [
                        _createElementVNode$1("button", {
                            type: "submit",
                            class: "px-4 py-2 rounded font-semibold transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white"
                        }, " Create ")
                    ], -1))
                ], 544);
            };
        }
    });
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { createTextVNode: _createTextVNode, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = await importShared('vue');
    const _hoisted_1 = {
        class: "w-full"
    };
    _sfc_main = _defineComponent({
        __name: "CreateView",
        props: {
            parentId: String
        },
        setup (__props) {
            const props = __props;
            if (props.parentId) {
                wikiProvider(props.parentId);
            }
            return (_ctx, _cache)=>{
                return _openBlock(), _createBlock(_sfc_main$6, null, {
                    default: _withCtx(()=>[
                            _createElementVNode("div", _hoisted_1, [
                                _createVNode(_sfc_main$3, {
                                    className: "space-y-4"
                                }, {
                                    default: _withCtx(()=>[
                                            _createVNode(_sfc_main$7, null, {
                                                default: _withCtx(()=>_cache[0] || (_cache[0] = [
                                                        _createTextVNode(" Creating a new wiki page: ", -1)
                                                    ])),
                                                _: 1,
                                                __: [
                                                    0
                                                ]
                                            }),
                                            _createVNode(_sfc_main$1)
                                        ]),
                                    _: 1
                                })
                            ])
                        ]),
                    _: 1
                });
            };
        }
    });
});
export { _sfc_main as _, __tla };
