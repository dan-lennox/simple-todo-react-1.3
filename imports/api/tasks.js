import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');

console.log('hereeeee');
console.log(Tasks.find({}).count());