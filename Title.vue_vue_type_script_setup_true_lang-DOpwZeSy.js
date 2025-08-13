import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
let _sfc_main;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared('vue');
    _sfc_main = _defineComponent({
        __name: "Title",
        props: {
            float: {
                type: String,
                default: "left",
                required: false
            }
        },
        setup (__props) {
            return (_ctx, _cache)=>{
                return _openBlock(), _createElementBlock("h3", {
                    class: _normalizeClass(`my-auto text-${__props.float} text-lg text-gray-800 dark:text-gray-100 font-semibold`)
                }, [
                    _renderSlot(_ctx.$slots, "default")
                ], 2);
            };
        }
    });
});
export { _sfc_main as _, __tla };
