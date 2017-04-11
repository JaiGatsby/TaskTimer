import {Mongo} from 'meteor/mongo';

// Creates a new tasks module that creates a Mongo collection and exports it
export const Tasks = new Mongo.Collection('tasks');