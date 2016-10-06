var Vue = require('vue');

var datatable = require('polls/components/datatable');

new Vue({
    el: '#polls-table',
    data: window.data,
    components: {
        'vs-datatable': datatable
    },
});
