var $ = require('jquery');

var component = {
    template: '<table id="my-datatable"></table>',
    props: ['table_data2'],
    data: function() {
        return {
            DataTable: null
        };
    },
    watch: {
        table_data2: {
            handler: function(val) {
                console.log('Handling!');
                this.DataTable.clear();
                this.DataTable.rows.add(val).draw();
            },
            deep: true
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            console.log('Starting!');
            this.DataTable = $('#my-datatable').DataTable({
                data: this.table_data2,
                columns: [
                    {
                        'title': 'Name',
                        'data': 'name',
                    },
                    {
                        'title': 'Salary',
                        'data': 'salary.label'
                    }
                ]
            });
        });
    }
};

module.exports = component;
