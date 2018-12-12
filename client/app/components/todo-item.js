import { set } from '@ember/object';
import { isBlank } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
	store: service(),
	tagName: 'li',
	editing: false,
	classNameBindings: ['todo.completed', 'editing'],

	actions: {
		startEditing() {
			this.onStartEdit();
			this.set('editing', true);
			scheduleOnce('afterRender', this, 'focusInput');
		},

		doneEditing(todoTitle) {
			if (!this.editing) { return; }
			if (isBlank(todoTitle)) {
				this.send('removeTodo');
			} else {
                this.task.set('title',todoTitle.trim());
                this.task.save();
                this.set('editing', false);
				this.onEndEdit();
			}
		},

		handleKeydown(e) {
			if (e.keyCode === 13) {
				e.target.blur();
			} else if (e.keyCode === 27) {
				this.set('editing', false);
			}
		},

		toggleCompleted(e) {
			let todo = this.todo;


			set(todo, 'completed', e.target.checked);
            this.task.set('done', e.target.checked);
            this.task.save();
		},

		removeTodo() {
            this.task.deleteRecord();
            this.task.save();
		}
	},

	focusInput() {
		this.element.querySelector('input.edit').focus();
	}
});
