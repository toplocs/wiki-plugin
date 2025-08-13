import { importShared, __tla as __tla_0 } from './__federation_fn_import-JJi9_Sb3.js';
import { c as createRouter, a as createWebHistory, R as RouterView, u as useRoute, __tla as __tla_1 } from './vue-router-D-i8VYmx.js';
let nt, tt;
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
    })()
]).then(async ()=>{
    true && (function polyfill() {
        const relList = document.createElement("link").relList;
        if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
        }
        for (const link of document.querySelectorAll('link[rel="modulepreload"]')){
            processPreload(link);
        }
        new MutationObserver((mutations)=>{
            for (const mutation of mutations){
                if (mutation.type !== "childList") {
                    continue;
                }
                for (const node of mutation.addedNodes){
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                }
            }
        }).observe(document, {
            childList: true,
            subtree: true
        });
        function getFetchOpts(link) {
            const fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
            else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
            else fetchOpts.credentials = "same-origin";
            return fetchOpts;
        }
        function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            const fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
        }
    }());
    const scriptRel = 'modulepreload';
    const assetsURL = function(dep, importerUrl) {
        return new URL(dep, importerUrl).href;
    };
    const seen = {};
    const __vitePreload = function preload(baseModule, deps, importerUrl) {
        let promise = Promise.resolve();
        if (true && deps && deps.length > 0) {
            const links = document.getElementsByTagName("link");
            const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
            const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
            promise = Promise.allSettled(deps.map((dep)=>{
                dep = assetsURL(dep, importerUrl);
                if (dep in seen) return;
                seen[dep] = true;
                const isCss = dep.endsWith(".css");
                const cssSelector = isCss ? '[rel="stylesheet"]' : "";
                const isBaseRelative = !!importerUrl;
                if (isBaseRelative) {
                    for(let i = links.length - 1; i >= 0; i--){
                        const link2 = links[i];
                        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
                            return;
                        }
                    }
                } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                    return;
                }
                const link = document.createElement("link");
                link.rel = isCss ? "stylesheet" : scriptRel;
                if (!isCss) {
                    link.as = "script";
                }
                link.crossOrigin = "";
                link.href = dep;
                if (cspNonce) {
                    link.setAttribute("nonce", cspNonce);
                }
                document.head.appendChild(link);
                if (isCss) {
                    return new Promise((res, rej)=>{
                        link.addEventListener("load", res);
                        link.addEventListener("error", ()=>rej(new Error(`Unable to preload CSS for ${dep}`)));
                    });
                }
            }));
        }
        function handlePreloadError(err) {
            const e = new Event("vite:preloadError", {
                cancelable: true
            });
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
                throw err;
            }
        }
        return promise.then((res)=>{
            for (const item of res || []){
                if (item.status !== "rejected") continue;
                handlePreloadError(item.reason);
            }
            return baseModule().catch(handlePreloadError);
        });
    };
    const { defineComponent: C, createElementBlock: i, openBlock: n, createElementVNode: e, createBlock: b, unref: T, Suspense: A, withCtx: k, resolveDynamicComponent: H, shallowRef: J, onMounted: N, toDisplayString: r, ref: S, withDirectives: W, vModelSelect: K, normalizeClass: D, Fragment: $, renderList: P, createApp: Q, computed: M, createCommentVNode: h, renderSlot: X, createVNode: R, createTextVNode: x } = await importShared('vue');
    const te = {
        class: "min-h-screen bg-white dark:bg-black"
    }, ne = {
        class: "mx-auto max-w-5xl"
    }, oe = C({
        __name: "App",
        setup (p) {
            return (o, c)=>(n(), i("div", te, [
                    e("div", ne, [
                        (n(), b(T(RouterView), {
                            key: o.$route.params.id || ""
                        }))
                    ])
                ]));
        }
    }), se = {
        key: 1
    }, le = C({
        __name: "DirectComponent",
        props: {
            component: {
                type: Object,
                required: true
            }
        },
        setup (p) {
            const o = useRoute();
            return console.log("Route params:", o.params), (c, s)=>(n(), b(A, null, {
                    default: k(()=>[
                            p.component ? (n(), b(H(p.component), {
                                key: 0,
                                parentId: T(o).params.id,
                                query: T(o).query
                            }, null, 8, [
                                "parentId",
                                "query"
                            ])) : (n(), i("div", se, s[0] || (s[0] = [
                                e("i", {
                                    class: "text-sm text-gray-400"
                                }, " Component is not available ", -1)
                            ])))
                        ]),
                    fallback: k(()=>s[1] || (s[1] = [
                            e("div", null, "Loading remote component...", -1)
                        ])),
                    _: 1
                }));
        }
    }), ie = {
        key: 1
    }, re = {
        class: "text-sm text-gray-400"
    }, ae = C({
        __name: "PluginComponent",
        props: {
            plugin: {},
            position: {}
        },
        setup (p) {
            const o = async ()=>{
                try {
                    const t = await __vitePreload(()=>import('./_virtual___federation__-CHsaZR8d.js').then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), true ? [] : void 0, import.meta.url);
                    return {
                        getRemote: t.__federation_method_getRemote,
                        setRemote: t.__federation_method_setRemote,
                        unwrapModule: t.__federation_method_unwrapDefault
                    };
                } catch  {
                    return console.warn("Federation not available, federation features will be disabled"), {
                        getRemote: ()=>Promise.reject("Federation not available"),
                        setRemote: ()=>{},
                        unwrapModule: (l)=>l
                    };
                }
            }, c = p, s = useRoute(), g = J(), v = async ()=>{
                try {
                    const { getRemote: t, setRemote: l, unwrapModule: u } = await o(), m = c.plugin;
                    if (m) {
                        l(m.name, {
                            url: ()=>Promise.resolve(m.url),
                            format: "esm",
                            from: "vite"
                        });
                        const _ = await t(m.name, `./${c.position}`), F = await u(_);
                        g.value = F;
                    }
                } catch (t) {
                    console.error("Failed to load remote plugin:", t);
                }
            };
            return N(async ()=>{
                await v();
            }), (t, l)=>(n(), b(A, null, {
                    default: k(()=>{
                        var u;
                        return [
                            g.value ? (n(), b(H(g.value), {
                                key: 0,
                                parentId: T(s).params.id,
                                query: T(s).query
                            }, null, 8, [
                                "parentId",
                                "query"
                            ])) : (n(), i("div", ie, [
                                e("i", re, r(((u = t.plugin) == null ? void 0 : u.name) || "Plugin") + " is not available ", 1)
                            ]))
                        ];
                    }),
                    fallback: k(()=>l[0] || (l[0] = [
                            e("div", null, "Loading remote component...", -1)
                        ])),
                    _: 1
                }));
        }
    }), ue = {
        class: "p-4 max-w-6xl mx-auto"
    }, de = {
        class: "flex items-center justify-between border-b-2 border-blue-600 pb-2 mb-2"
    }, pe = {
        class: "flex items-center gap-6"
    }, ce = {
        class: "flex items-center gap-2"
    }, me = {
        class: "flex items-center gap-2"
    }, ge = {
        class: "mb-4"
    }, fe = {
        class: "flex border-b border-gray-200"
    }, ve = [
        "onClick"
    ], _e = {
        class: "mb-4"
    }, he = {
        class: "flex gap-8 min-h-96 overflow-x-auto"
    }, ye = {
        key: 1,
        class: "flex items-center justify-center h-full text-gray-500"
    }, be = {
        class: "text-center"
    }, ke = {
        class: "text-xs mt-1 text-gray-400"
    }, j = C({
        __name: "PluginEnvironment",
        props: {
            devConfig: {
                type: Object,
                default: ()=>({})
            }
        },
        setup (p) {
            let o = null;
            const c = async ()=>{
                if (o) return o;
                try {
                    const f = await __vitePreload(()=>import('./_virtual___federation__-CHsaZR8d.js').then(async (m)=>{
                            await m.__tla;
                            return m;
                        }), true ? [] : void 0, import.meta.url);
                    return o = {
                        getRemote: f.__federation_method_getRemote,
                        setRemote: f.__federation_method_setRemote,
                        unwrapModule: f.__federation_method_unwrapDefault
                    }, o;
                } catch  {
                    return console.warn("Federation not available, federation features will be disabled"), o = {
                        getRemote: ()=>Promise.reject("Federation not available"),
                        setRemote: ()=>{},
                        unwrapModule: (a)=>a
                    }, o;
                }
            }, s = p, g = S(false), v = S(null), t = S({}), l = [
                "Info",
                "Settings"
            ], u = [
                "Content",
                "Sidebar"
            ], m = S("Topic"), _ = S("Info"), F = (f, a, d)=>{
                if (!v.value || g.value) return null;
                const y = v.value.slots.find((w)=>w.entity === f && w.page === a && w.slot === d);
                return y ? t.value[y.component] : null;
            }, B = (f, a, d)=>{
                if (!v.value) return "";
                const y = v.value.slots.find((w)=>w.entity === f && w.page === a && w.slot === d);
                return y ? y.component : "";
            }, E = (f, a, d)=>v.value ? v.value.slots.some((y)=>y.entity === f && y.page === a && y.slot === d) : false;
            async function O() {
                try {
                    await fetch("http://localhost:3006/assets/plugin.js", {
                        method: "HEAD"
                    }), g.value = !0;
                } catch  {
                    g.value = false;
                }
            }
            const G = async (f)=>{
                try {
                    const { getRemote: a, setRemote: d, unwrapModule: y } = await c();
                    d("plugin", {
                        url: ()=>Promise.resolve(f),
                        format: "esm",
                        from: "vite"
                    });
                    const w = await a("plugin", "./PluginConfig");
                    return await y(w);
                } catch (a) {
                    console.error("Failed to load remote plugin config:", a);
                }
            };
            async function U() {
                await O(), g.value ? v.value = await G("http://localhost:3006/assets/plugin.js") : (console.log("Dev mode: Loading direct imports from ../src"), await z()), console.log("Plugin Config: ", v.value);
            }
            async function z() {
                try {
                    s.devConfig.pluginConfig && (v.value = s.devConfig.pluginConfig), s.devConfig.components && (t.value = s.devConfig.components), console.log("Direct imports loaded from devConfig:", {
                        pluginConfig: v.value,
                        components: Object.keys(t.value)
                    });
                } catch (f) {
                    console.error("Failed to load direct imports:", f);
                }
            }
            return N(()=>{
                U();
            }), (f, a)=>(n(), i("div", ue, [
                    e("div", de, [
                        a[4] || (a[4] = e("h1", {
                            class: "text-3xl font-bold text-gray-900"
                        }, "Plugin DevEnv", -1)),
                        e("div", pe, [
                            e("div", ce, [
                                a[2] || (a[2] = e("span", {
                                    class: "text-sm text-gray-600"
                                }, "Entity:", -1)),
                                W(e("select", {
                                    "onUpdate:modelValue": a[0] || (a[0] = (d)=>m.value = d),
                                    class: "px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, a[1] || (a[1] = [
                                    e("option", {
                                        value: "Topic"
                                    }, "Topic", -1),
                                    e("option", {
                                        value: "Location"
                                    }, "Location", -1)
                                ]), 512), [
                                    [
                                        K,
                                        m.value
                                    ]
                                ])
                            ]),
                            e("div", me, [
                                a[3] || (a[3] = e("span", {
                                    class: "text-sm text-gray-600"
                                }, "Mode:", -1)),
                                e("span", {
                                    class: D([
                                        "px-3 py-1 rounded-full text-sm font-semibold",
                                        g.value ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                                    ])
                                }, r(g.value ? "Preview (Federation)" : "Dev (Hot Reload)"), 3)
                            ])
                        ])
                    ]),
                    e("div", ge, [
                        e("div", fe, [
                            (n(), i($, null, P(l, (d)=>e("button", {
                                    key: d,
                                    onClick: (y)=>_.value = d,
                                    class: D([
                                        "px-4 py-2 text-sm font-medium transition-colors duration-200",
                                        _.value === d ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"
                                    ])
                                }, r(d), 11, ve)), 64))
                        ])
                    ]),
                    e("div", _e, [
                        e("div", he, [
                            (n(), i($, null, P(u, (d)=>e("div", {
                                    key: `${m.value}-${_.value}-${d}`,
                                    class: D(d === "Content" ? "flex-1 min-w-96" : "w-72 min-w-72 flex-shrink-0")
                                }, [
                                    e("div", {
                                        class: D([
                                            "border-2 rounded-lg p-4 bg-white min-h-72",
                                            E(m.value, _.value, d) ? "border-blue-600" : "border-gray-300"
                                        ])
                                    }, [
                                        E(m.value, _.value, d) ? (n(), i($, {
                                            key: 0
                                        }, [
                                            F(m.value, _.value, d) ? (n(), b(le, {
                                                key: 0,
                                                component: F(m.value, _.value, d),
                                                parentId: m.value.toLowerCase() + "-" + _.value.toLowerCase()
                                            }, null, 8, [
                                                "component",
                                                "parentId"
                                            ])) : (n(), b(ae, {
                                                key: 1,
                                                plugin: {
                                                    name: "link-plugin",
                                                    url: "http://localhost:3006/assets/plugin.js"
                                                },
                                                position: B(m.value, _.value, d),
                                                parentId: m.value.toLowerCase() + "-" + _.value.toLowerCase()
                                            }, null, 8, [
                                                "position",
                                                "parentId"
                                            ]))
                                        ], 64)) : (n(), i("div", ye, [
                                            e("div", be, [
                                                a[5] || (a[5] = e("div", {
                                                    class: "text-lg font-medium mb-2"
                                                }, "No Component", -1)),
                                                a[6] || (a[6] = e("div", {
                                                    class: "text-sm"
                                                }, "This slot is not provided by the plugin", -1)),
                                                e("div", ke, r(m.value) + " → " + r(_.value) + " → " + r(d), 1)
                                            ])
                                        ]))
                                    ], 2)
                                ], 2)), 64))
                        ])
                    ]),
                    a[7] || (a[7] = e("div", {
                        class: "flex items-center justify-between border-b-2 border-blue-600 pb-2 mb-8"
                    }, [
                        e("h1", {
                            class: "text-3xl font-bold text-gray-900"
                        }, "Plugin Registry")
                    ], -1))
                ]));
        }
    });
    tt = function(p = {}) {
        const o = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: "/",
                    component: j,
                    props: {
                        devConfig: p
                    }
                },
                {
                    path: "/:id",
                    component: j,
                    props: (s)=>({
                            devConfig: p,
                            id: s.params.id
                        })
                }
            ]
        }), c = Q(oe);
        return c.use(o), c.provide("devConfig", p), c;
    };
    let Ce, we, $e, I, Pe, Re, xe, L, Le, De, Ie, Se, Me, q, Te, Fe, Ee, je, qe, Ae, He, Ne, Ve, Be, Oe, Ge, Ue, ze, Je, We, Ke, Qe, Xe;
    Ce = {
        class: "plugin-header"
    };
    we = {
        class: "subtitle"
    };
    $e = C({
        __name: "PluginHeader",
        props: {
            title: {},
            subtitle: {},
            icon: {
                default: "🔌"
            },
            status: {}
        },
        setup (p) {
            const o = p, c = M(()=>{
                if (!o.status) return "";
                const s = o.status.toLowerCase();
                return s.includes("federated") || s.includes("modern") ? "status-modern" : s.includes("hybrid") ? "status-hybrid" : s.includes("legacy") ? "status-legacy" : "";
            });
            return (s, g)=>(n(), i("header", Ce, [
                    e("h1", null, r(s.icon) + " TopLocs " + r(s.title) + " Plugin", 1),
                    e("p", we, r(s.subtitle), 1),
                    s.status ? (n(), i("span", {
                        key: 0,
                        class: D([
                            "status-badge",
                            c.value
                        ])
                    }, r(s.status), 3)) : h("", true)
                ]));
        }
    });
    I = (p, o)=>{
        const c = p.__vccOpts || p;
        for (const [s, g] of o)c[s] = g;
        return c;
    };
    Pe = I($e, [
        [
            "__scopeId",
            "data-v-1e3831fb"
        ]
    ]);
    Re = {
        class: "plugin-section"
    };
    xe = C({
        __name: "PluginSection",
        props: {
            title: {}
        },
        setup (p) {
            return (o, c)=>(n(), i("div", Re, [
                    e("h2", null, r(o.title), 1),
                    X(o.$slots, "default", {}, void 0, true)
                ]));
        }
    });
    L = I(xe, [
        [
            "__scopeId",
            "data-v-fc21c327"
        ]
    ]);
    Le = {
        class: "feature-grid"
    };
    De = C({
        __name: "PluginFeatureGrid",
        props: {
            features: {}
        },
        setup (p) {
            return (o, c)=>(n(), i("div", Le, [
                    (n(true), i($, null, P(o.features, (s)=>(n(), i("div", {
                            key: s.title,
                            class: "feature"
                        }, [
                            e("h3", null, r(s.icon) + " " + r(s.title), 1),
                            e("p", null, r(s.description), 1)
                        ]))), 128))
                ]));
        }
    });
    Ie = I(De, [
        [
            "__scopeId",
            "data-v-453d781e"
        ]
    ]);
    Se = {
        class: "code-block"
    };
    Me = C({
        __name: "PluginCodeBlock",
        props: {
            code: {}
        },
        setup (p) {
            return (o, c)=>(n(), i("div", Se, [
                    e("pre", null, [
                        e("code", null, r(o.code), 1)
                    ])
                ]));
        }
    });
    q = I(Me, [
        [
            "__scopeId",
            "data-v-67b69bfe"
        ]
    ]);
    Te = {
        class: "links"
    };
    Fe = [
        "href"
    ];
    Ee = C({
        __name: "PluginLinks",
        props: {
            links: {}
        },
        setup (p) {
            return (o, c)=>(n(), i("div", Te, [
                    (n(true), i($, null, P(o.links, (s)=>(n(), i("a", {
                            key: s.href,
                            href: s.href,
                            class: D([
                                "link-button",
                                {
                                    secondary: !s.primary
                                }
                            ]),
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r(s.label), 11, Fe))), 128))
                ]));
        }
    });
    je = I(Ee, [
        [
            "__scopeId",
            "data-v-767eaf10"
        ]
    ]);
    qe = {
        class: "plugin-info-page"
    };
    Ae = {
        class: "container"
    };
    He = {
        key: 0
    };
    Ne = {
        key: 0
    };
    Ve = {
        key: 0
    };
    Be = {
        class: "highlight"
    };
    Oe = {
        class: "highlight"
    };
    Ge = {
        class: "highlight"
    };
    Ue = {
        key: 0
    };
    ze = {
        class: "highlight"
    };
    Je = {
        key: 0
    };
    We = {
        key: 1
    };
    Ke = {
        key: 2
    };
    Qe = {
        class: "highlight"
    };
    Xe = C({
        __name: "PluginInfoPage",
        props: {
            pluginConfig: {},
            icon: {
                default: "🔌"
            },
            status: {},
            about: {},
            features: {},
            architecture: {},
            endpoints: {},
            development: {},
            slotDescriptions: {},
            links: {}
        },
        setup (p) {
            const o = p, c = M(()=>[
                    {
                        href: `https://github.com/toplocs/${o.pluginConfig.id.replace(/_/g, "-")}`,
                        label: "GitHub Repository",
                        primary: true
                    },
                    {
                        href: "https://github.com/toplocs/tribelike",
                        label: "TopLocs Platform"
                    },
                    {
                        href: "https://toplocs.github.io/toplocs-workspace/",
                        label: "Documentation"
                    }
                ]), s = M(()=>o.links || c.value), g = M(()=>{
                var t;
                return JSON.stringify({
                    id: o.pluginConfig.id,
                    name: o.pluginConfig.name,
                    url: ((t = o.endpoints) == null ? void 0 : t.plugin) || o.pluginConfig.url,
                    version: o.pluginConfig.version || "1.0.0",
                    description: o.pluginConfig.description,
                    author: o.pluginConfig.author || "TopLocs Team"
                }, null, 2);
            }), v = M(()=>{
                if (!o.pluginConfig.slots) return [];
                const t = new Map();
                return o.pluginConfig.slots.forEach((l)=>{
                    var m;
                    const u = `${l.page}/${l.slot}`;
                    t.has(u) || t.set(u, {
                        path: u,
                        description: ((m = o.slotDescriptions) == null ? void 0 : m[`${l.page}/${l.slot}`]) || `${l.component} component`
                    });
                }), Array.from(t.values());
            });
            return (t, l)=>(n(), i("div", qe, [
                    e("div", Ae, [
                        R(Pe, {
                            title: t.pluginConfig.name,
                            subtitle: t.pluginConfig.description,
                            icon: t.icon,
                            status: t.status
                        }, null, 8, [
                            "title",
                            "subtitle",
                            "icon",
                            "status"
                        ]),
                        t.about ? (n(), b(L, {
                            key: 0,
                            title: "About"
                        }, {
                            default: k(()=>[
                                    e("p", null, r(t.about), 1),
                                    t.features ? (n(), b(Ie, {
                                        key: 0,
                                        features: t.features
                                    }, null, 8, [
                                        "features"
                                    ])) : h("", true)
                                ]),
                            _: 1
                        })) : h("", true),
                        t.architecture ? (n(), b(L, {
                            key: 1,
                            title: "Architecture"
                        }, {
                            default: k(()=>[
                                    e("p", null, r(t.architecture.description), 1),
                                    t.architecture.points ? (n(), i("ul", He, [
                                        (n(true), i($, null, P(t.architecture.points, (u, m)=>(n(), i("li", {
                                                key: m
                                            }, [
                                                u.label ? (n(), i("strong", Ne, r(u.label) + ":", 1)) : h("", true),
                                                x(" " + r(u.text), 1)
                                            ]))), 128))
                                    ])) : h("", true)
                                ]),
                            _: 1
                        })) : h("", true),
                        R(L, {
                            title: "Integration"
                        }, {
                            default: k(()=>[
                                    l[1] || (l[1] = e("p", null, "To use this plugin in your TopLocs instance, add it to your plugin configuration:", -1)),
                                    R(q, {
                                        code: g.value
                                    }, null, 8, [
                                        "code"
                                    ]),
                                    t.pluginConfig.slots && t.pluginConfig.slots.length > 0 ? (n(), i("div", Ve, [
                                        l[0] || (l[0] = e("p", null, "The plugin exposes components for the following slots:", -1)),
                                        e("ul", null, [
                                            (n(true), i($, null, P(v.value, (u)=>(n(), i("li", {
                                                    key: u
                                                }, [
                                                    e("span", Be, r(u.path), 1),
                                                    x(" - " + r(u.description), 1)
                                                ]))), 128))
                                        ])
                                    ])) : h("", true)
                                ]),
                            _: 1,
                            __: [
                                1
                            ]
                        }),
                        t.endpoints ? (n(), b(L, {
                            key: 2,
                            title: "Plugin Endpoints"
                        }, {
                            default: k(()=>[
                                    l[8] || (l[8] = e("p", null, "The plugin is served via GitHub Pages with the following key endpoints:", -1)),
                                    e("ul", null, [
                                        e("li", null, [
                                            l[2] || (l[2] = e("strong", null, "Plugin Entry:", -1)),
                                            l[3] || (l[3] = x()),
                                            e("span", Oe, r(t.endpoints.plugin), 1)
                                        ]),
                                        e("li", null, [
                                            l[4] || (l[4] = e("strong", null, "Landing Page:", -1)),
                                            l[5] || (l[5] = x()),
                                            e("span", Ge, r(t.endpoints.landing), 1)
                                        ]),
                                        t.endpoints.demo ? (n(), i("li", Ue, [
                                            l[6] || (l[6] = e("strong", null, "Live Demo:", -1)),
                                            l[7] || (l[7] = x()),
                                            e("span", ze, r(t.endpoints.demo), 1)
                                        ])) : h("", true)
                                    ])
                                ]),
                            _: 1,
                            __: [
                                8
                            ]
                        })) : h("", true),
                        t.development ? (n(), b(L, {
                            key: 3,
                            title: "Development"
                        }, {
                            default: k(()=>[
                                    t.development.stack ? (n(), i("div", Je, [
                                        e("p", null, "The " + r(t.pluginConfig.name) + " Plugin is built with:", 1),
                                        e("ul", null, [
                                            (n(true), i($, null, P(t.development.stack, (u)=>(n(), i("li", {
                                                    key: u
                                                }, r(u), 1))), 128))
                                        ])
                                    ])) : h("", true),
                                    t.development.setup ? (n(), i("div", We, [
                                        l[9] || (l[9] = e("p", null, "To run locally:", -1)),
                                        R(q, {
                                            code: t.development.setup
                                        }, null, 8, [
                                            "code"
                                        ])
                                    ])) : h("", true),
                                    t.development.urls ? (n(), i("div", Ke, [
                                        l[10] || (l[10] = e("p", null, [
                                            e("strong", null, "Development URLs:")
                                        ], -1)),
                                        e("ul", null, [
                                            (n(true), i($, null, P(t.development.urls, (u)=>(n(), i("li", {
                                                    key: u.label
                                                }, [
                                                    x(r(u.label) + ": ", 1),
                                                    e("span", Qe, r(u.url), 1)
                                                ]))), 128))
                                        ])
                                    ])) : h("", true)
                                ]),
                            _: 1
                        })) : h("", true),
                        R(L, {
                            title: "Resources"
                        }, {
                            default: k(()=>[
                                    R(je, {
                                        links: s.value
                                    }, null, 8, [
                                        "links"
                                    ])
                                ]),
                            _: 1
                        })
                    ])
                ]));
        }
    });
    nt = I(Xe, [
        [
            "__scopeId",
            "data-v-b465bc8c"
        ]
    ]);
});
export { nt as n, tt as t, __tla };
