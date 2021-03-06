import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
    store: service(),
	model() {
		return this.store.findAll('task');
	}
});
