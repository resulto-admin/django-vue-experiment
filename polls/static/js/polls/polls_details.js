var Vue = require('vue');

var pollForm = require('polls/components/polls_form');

new Vue({
    el: '#polls-details',
    data: window.polls,
    components: {
        'vs-poll-form': pollForm,
    },
});

new Vue({
    el: 'title',
    data: window.polls,
    computed: {
        poll_details_title: function() {
            if (!this.polls_details) {
                return 'Add Poll';
            } else {
                return `Poll ${this.polls_details.id}`;
            }
        }
    }
});
