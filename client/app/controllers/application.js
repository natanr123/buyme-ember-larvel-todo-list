import { isBlank } from '@ember/utils';
import { filterBy } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
	store: service(),
	remaining: filterBy('model', 'done', false),
	completed: filterBy('model', 'done'),
	actions: {
		createTodo(e) {
			if (e.keyCode === 13 && !isBlank(e.target.value)) {
				this.repo.add({ title: e.target.value.trim(), completed: false });
				e.target.value = '';
			}
		},

		clearCompleted() {
			alert('This feautre will be comming soon')
			// this.model.removeObjects(this.completed);
			// this.store.persist();
		}
	}
});
