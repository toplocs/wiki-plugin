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
    const { computed } = await importShared('vue');
    _sfc_main = _defineComponent({
        __name: "Container",
        props: {
            className: {
                type: String,
                default: ""
            }
        },
        setup (__props) {
            const props = __props;
            const computedClass = computed(()=>`relative inline-flex w-full p-4 ${props.className}`);
            return (_ctx, _cache)=>{
                return _openBlock(), _createElementBlock("div", {
                    class: _normalizeClass(computedClass.value)
                }, [
                    _renderSlot(_ctx.$slots, "default")
                ], 2);
            };
        }
    });
});
export { _sfc_main as _, __tla };
