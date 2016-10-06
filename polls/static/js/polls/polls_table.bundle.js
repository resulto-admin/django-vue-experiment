webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);

	var datatable = __webpack_require__(8);

	new Vue({
	    el: '#polls-table',
	    data: window.data,
	    components: {
	        'vs-datatable': datatable
	    }
	});

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(9);

	var component = {
	    template: '<table id="my-datatable"></table>',
	    props: ['table_data2'],
	    data: function data() {
	        return {
	            DataTable: null
	        };
	    },
	    watch: {
	        table_data2: {
	            handler: function handler(val) {
	                console.log('Handling!');
	                this.DataTable.clear();
	                this.DataTable.rows.add(val).draw();
	            },
	            deep: true
	        }
	    },
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            console.log('Starting!');
	            this.DataTable = $('#my-datatable').DataTable({
	                data: this.table_data2,
	                columns: [{
	                    'title': 'Name',
	                    'data': 'name'
	                }, {
	                    'title': 'Salary',
	                    'data': 'salary.label'
	                }]
	            });
	        });
	    }
	};

	module.exports = component;

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }

});