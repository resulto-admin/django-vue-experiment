var Vue = require('vue');
var VueTables = require('vue-tables-2');
var cellName = require('polls/components/cell_name');

Vue.component('vs-cell-name', cellName);

var options = {
    filterByColumn: true,
    templates: {
        name: function(h, row) {
            return <vs-cell-name row={row}></vs-cell-name>
        }
    }
};

Vue.use(VueTables.client, options);

new Vue({
    el: '#polls-table2',
    data: window.data,
    components: {
    },
});
