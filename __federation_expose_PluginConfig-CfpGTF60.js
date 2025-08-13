const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
const pluginConfig = {
  id: "wiki_plugin",
  name: "Wiki",
  url: `${baseUrl}/plugin.js`,
  version: "1.0.0",
  description: "Share and organize wikis within TopLocs spheres",
  author: "TopLocs Team",
  slots: [
    { entity: "Topic", page: "Info", slot: "Content", component: "MainView" },
    { entity: "Topic", page: "Info", slot: "Sidebar", component: "SidebarView" },
    { entity: "Topic", page: "Settings", slot: "Content", component: "SettingsView" }
  ],
  paths: [
    { url: "wiki", component: "WikiView" },
    { url: "wiki/create", component: "CreateView" }
  ],
  tabs: [
    { value: "Wiki", href: "wiki" }
  ]
};

export { pluginConfig as default };
