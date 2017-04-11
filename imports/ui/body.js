import {Template} from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';
// body section can be accessed in js by Template.body
Template.body.helpers({
	tasks(){
		return Tasks.find({});
	}
});

// Template.body.events({
// 	'submit .new-task'(event) {
// 		event.preventDefault(); // Prevent default(empty) form submit

// 		// Get value
// 		const target = event.target;
// 		const text = target.text.value;

// 		// Insert a task into t
// 	}
// });