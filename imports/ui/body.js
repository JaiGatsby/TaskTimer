import {Template} from 'meteor/templating';

import './body.html';
// body section can be accessed in js by Template.body
Template.body.helpers({
	tasks: [
	{text: 'This is task 1'},
	{text: 'This is task 2'},
	{text: 'This is task 3'},
	],
});