var Vue = require('vue');

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
