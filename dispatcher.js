
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

const Listeners = new Mongo.Collection(null);

export const Dispatcher = {};

Dispatcher.registerListener = function(eventName, eventHandler, priority){
    check(eventName, String);
    check(eventHandler, Function);
    priority = priority || 100;

    Listeners
        .insert({
            eventName: eventName,
            handler:   eventHandler,
            priority:  priority
        });
};


Dispatcher.dispatch = function(eventName, event){
    let query = {};
    let options = {};

    check(eventName, String);

    query.eventName = eventName;
    options.sort = { priority: -1 };

    Listeners
        .find(query, options)
        .forEach(function(listener){
            listener.handler(event);
        });
};
