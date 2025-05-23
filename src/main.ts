import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import gun from './gun';

const chain = gun.get('wiki_plugin');
chain.once(data => {
	if (!data) {
		const node = chain.put({
			id: 'wiki_plugin',
			name: 'Wiki',
			url: 'http://localhost:3002/assets/plugin.js',
		});

		const paths = gun.get('wiki_plugin/paths');
		paths.set({ path: 'wiki', component: 'WikiView' });
		paths.set({ path: 'wiki/create', component: 'WikiCreate' });
		paths.set({ path: 'settings/wiki', component: 'WikiSetting' });

		const slots = gun.get('wiki_plugin/slots');
		slots.set({ slot: 'InfoView', component: 'Sidebar' });

		const tabs = gun.get('wiki_plugin/tabs');
		tabs.set({ value: 'Wiki', href: 'wiki' });

		
		node.get('paths').put(paths);
		node.get('slots').put(slots);
		node.get('tabs').put(tabs);
		gun.get('plugins').set(node);

		console.log('Wiki plugin has been added to the gun plugin list', node);
	}
});


const app = createApp(App)

app.mount('#wiki-plugin')