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
			path: '/wiki',
			component: 'WikiView',
		});
		gun.get('plugins').set(node);

		console.log('Wiki plugin has been added to the gun plugin list', node);
	}
});

const app = createApp(App)

app.mount('#wiki-plugin')