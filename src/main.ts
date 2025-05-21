import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import gun from './gun';

const chain = gun.get('plugin/wiki_plugin');
chain.once(data => {
	if (!data) {
		const node = chain.put({
			id: 'wiki_plugin',
			name: 'Wiki',
			url: 'http://localhost:3002/assets/plugin.js',
		});

		const paths = gun.get('plugin/wiki_plugin/paths');
		paths.set({ path: 'wiki', component: 'WikiView' });
		paths.set({ path: 'wiki/create', component: 'WikiCreate' });
		
		node.get('paths').put(paths);
		gun.get('plugins').set(node);

		console.log('Wiki plugin has been added to the gun plugin list', node);
	}
});


const app = createApp(App)

app.mount('#wiki-plugin')