import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
	'click .finished'(event) {
		Tasks.update(this._id,{
			$set: {fin: true},
		});
	},
	'click .delete'(){
		Tasks.remove(this._id);
	},
	'click .pause'(){

	}
});

Template.task.helpers({
	elapsedTime: function(startTime){
		var monitor = startTime?Chronos.currentTime(100) - startTime: null;
		console.log("monitoring time display")
		console.log(monitor);
		return monitor;
	}
});