"use strict";

const Vue = require('Vue');

Vue.component('todo', {
    data() {
        return {
            info: 'yo'
        }
    },
    ready() {
        console.log('loaded');
    }
})