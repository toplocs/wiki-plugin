import { n as nt, __tla as __tla_0 } from './style-DvNSS9UY.js';
import { importShared, __tla as __tla_1 } from './__federation_fn_import-JJi9_Sb3.js';
import pluginConfig from './__federation_expose_PluginConfig-CfpGTF60.js';
Promise.all([
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
    const { defineComponent: _defineComponent } = await importShared('vue');
    const { unref: _unref, openBlock: _openBlock, createBlock: _createBlock } = await importShared('vue');
    const about = `
The Wiki Plugin brings collaborative wiki functionality to TopLocs spheres, enabling communities to create, share, and organize knowledge collectively. Built on TipTap for rich text editing and Gun.js for P2P data sync, it provides a decentralized knowledge management system.
`;
    const _sfc_main = _defineComponent({
        __name: "InfoPage",
        setup (__props) {
            const features = [
                {
                    icon: "📝",
                    title: "Rich Text Editing",
                    description: "Create wikis with rich formatting including headings, lists, links, code blocks, and text alignment using TipTap editor"
                },
                {
                    icon: "🔍",
                    title: "Wiki Organization",
                    description: "Browse, search, and organize wikis within each sphere with an intuitive interface"
                },
                {
                    icon: "🔐",
                    title: "Sphere-Scoped Wikis",
                    description: "Each sphere maintains its own wiki collection, ensuring proper content separation and privacy"
                },
                {
                    icon: "🔄",
                    title: "Real-time Sync",
                    description: "P2P synchronization ensures wikis are available across all sphere members instantly"
                },
                {
                    icon: "👥",
                    title: "Community Collaboration",
                    description: "Multiple members can contribute to sphere wikis, building knowledge together"
                },
                {
                    icon: "⚙️",
                    title: "Sphere Settings",
                    description: "Configure wiki preferences and permissions at the sphere level"
                }
            ];
            const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
            const isDevelopment = window.location.hostname === "localhost";
            const endpoints = {
                plugin: `${baseUrl}/assets/plugin.js`,
                landing: baseUrl,
                demo: "https://toplocs.github.io/tribelike/"
            };
            const development = {
                stack: [
                    "Vue 3",
                    "TypeScript",
                    "TipTap",
                    "Gun.js",
                    "Tailwind CSS"
                ],
                setup: `pnpm install && pnpm dev`,
                urls: [
                    {
                        label: "GitHub Repository",
                        url: "https://github.com/toplocs/wiki-plugin"
                    },
                    {
                        label: isDevelopment ? "Local Development" : "Plugin Landing Page",
                        url: baseUrl
                    }
                ]
            };
            const slotDescriptions = {
                "Topic → Info → Content": "MainView: Displays wikis associated with the current topic",
                "Topic → Info → Sidebar": "SidebarView: Shows wiki-related actions and quick access",
                "Topic → Settings → Content": "SettingsView: Wiki configuration options for the sphere"
            };
            return (_ctx, _cache)=>{
                return _openBlock(), _createBlock(_unref(nt), {
                    "plugin-config": _unref(pluginConfig),
                    icon: "📖",
                    about,
                    features,
                    endpoints,
                    development,
                    "slot-descriptions": slotDescriptions
                }, null, 8, [
                    "plugin-config"
                ]);
            };
        }
    });
    const { createApp } = await importShared('vue');
    createApp(_sfc_main).mount("#app");
});
