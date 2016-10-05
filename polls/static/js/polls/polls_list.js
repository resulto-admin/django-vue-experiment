var Vue = require('vue');

var pollListItem = require('polls/components/polls_list_item');

new Vue({
    el: '#polls-list',
    data: window.polls,
    components: {
        'vs-poll-list-item': pollListItem
    },
});
