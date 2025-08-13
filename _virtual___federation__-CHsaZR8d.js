let __federation_method_ensure, __federation_method_getRemote, __federation_method_setRemote, __federation_method_unwrapDefault, __federation_method_wrapDefault;
let __tla = (async ()=>{
    const remotesMap = {
        'remoteName': {
            url: '',
            format: 'esm',
            from: 'vite'
        }
    };
    const currentImports = {};
    const loadJS = async (url, fn)=>{
        const resolvedUrl = typeof url === 'function' ? await url() : url;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = fn;
        script.src = resolvedUrl;
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    function get(name, remoteFrom) {
        return __federation_import(name).then((module)=>()=>{
                if (remoteFrom === 'webpack') {
                    return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module;
                }
                return module;
            });
    }
    function merge(obj1, obj2) {
        const mergedObj = Object.assign(obj1, obj2);
        for (const key of Object.keys(mergedObj)){
            if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                mergedObj[key] = merge(mergedObj[key], obj2[key]);
            }
        }
        return mergedObj;
    }
    const wrapShareModule = (remoteFrom)=>{
        return merge({
            'vue': {
                'undefined': {
                    get: ()=>get(new URL('__federation_shared_vue-BPugcRLE.js', import.meta.url).href, remoteFrom),
                    loaded: 1
                }
            },
            'tailwindcss': {
                'undefined': {
                    get: ()=>get(new URL('__federation_shared_tailwindcss-DtZhzqjI.js', import.meta.url).href, remoteFrom),
                    loaded: 1
                }
            }
        }, (globalThis.__federation_shared__ || {})['default'] || {});
    };
    async function __federation_import(name) {
        currentImports[name] ??= import(name).then(async (m)=>{
            await m.__tla;
            return m;
        });
        return currentImports[name];
    }
    __federation_method_ensure = async function(remoteId) {
        const remote = remotesMap[remoteId];
        if (!remote.inited) {
            if ('var' === remote.format) {
                return new Promise((resolve)=>{
                    const callback = ()=>{
                        if (!remote.inited) {
                            remote.lib = window[remoteId];
                            remote.lib.init(wrapShareModule(remote.from));
                            remote.inited = true;
                        }
                        resolve(remote.lib);
                    };
                    return loadJS(remote.url, callback);
                });
            } else if ([
                'esm',
                'systemjs'
            ].includes(remote.format)) {
                return new Promise((resolve, reject)=>{
                    const getUrl = typeof remote.url === 'function' ? remote.url : ()=>Promise.resolve(remote.url);
                    getUrl().then((url)=>{
                        import(url).then(async (m)=>{
                            await m.__tla;
                            return m;
                        }).then((lib)=>{
                            if (!remote.inited) {
                                const shareScope = wrapShareModule(remote.from);
                                lib.init(shareScope);
                                remote.lib = lib;
                                remote.lib.init(shareScope);
                                remote.inited = true;
                            }
                            resolve(remote.lib);
                        }).catch(reject);
                    });
                });
            }
        } else {
            return remote.lib;
        }
    };
    __federation_method_unwrapDefault = function(module) {
        return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module;
    };
    __federation_method_wrapDefault = function(module, need) {
        if (!module?.default && need) {
            let obj = Object.create(null);
            obj.default = module;
            obj.__esModule = true;
            return obj;
        }
        return module;
    };
    __federation_method_getRemote = function(remoteName, componentName) {
        return __federation_method_ensure(remoteName).then((remote)=>remote.get(componentName).then((factory)=>factory()));
    };
    __federation_method_setRemote = function(remoteName, remoteConfig) {
        remotesMap[remoteName] = remoteConfig;
    };
})();
export { __federation_method_ensure, __federation_method_getRemote, __federation_method_setRemote, __federation_method_unwrapDefault, __federation_method_wrapDefault, __tla };
