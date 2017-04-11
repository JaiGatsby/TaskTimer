import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
	'click .finished'() {

		Tasks.update(this._id, {
      		$set: { end: ! this.end },
    	});

	},
	'click .delete'(){
		Tasks.remove(this._id);
	},
	'click .pause'(){
		Tasks.update(this._id,{
			$set: {pause: true},
		});
	}
});

Template.task.helpers({
	elapsedTime: function(startTime){
		// console.log(status);
		// if (status==="Paused"){
		// 	return null;
		// }
		if (this.pause || this.end){
			console.log("backup");
			console.log(this.backup);
			return this.backup;
		}
		else{var monitor = startTime?Chronos.currentTime(100) - startTime: null;}
		
		// console.log("monitoring time display")
		// console.log(monitor);
		var sec_num = monitor/10;
		var hours   = Math.floor(sec_num / 3600);
	    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    var seconds = sec_num - (hours * 3600) - (minutes * 60);

	    if (hours   < 10) {hours   = "0"+hours;}
	    if (minutes < 10) {minutes = "0"+minutes;}
	    if (seconds < 10) {seconds = "0"+seconds;}
		// var time = new Date(monitor);

		// this.backup = hours+":"+minutes;
		Tasks.update(this._id, {
      		$set: { backup:  hours+":"+minutes },
    	});
		// console.log(this.backup);
		return hours+":"+minutes;
	}
});