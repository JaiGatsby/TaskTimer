import {Template} from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';
// body section can be accessed in js by Template.body
Template.body.helpers({
	tasks(){
		return Tasks.find({}, {sort: {createdAt:-1}});
	}
});

Template.body.events({
	// 'event .class'
	'submit .new-task'(event) {
		event.preventDefault(); // Prevent default(empty) form submit

		// Get value
		// console.log("Create new task");
		// console.log(event);
		// console.log(new Date().getTime())
		const target = event.target;
		const text = target.text.value;

		// Insert a task into the collection
	    Tasks.insert({
	      text,
	      createdAt: new Date(), // current time
	      elapsed: new Date().getTime(),
	      pause: false,
	      end: false,
	    });

		target.text.value="";
	},

});