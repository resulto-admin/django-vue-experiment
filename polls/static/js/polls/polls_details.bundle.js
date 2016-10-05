webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);

	new Vue({
	    el: 'title',
	    data: window.polls,
	    computed: {
	        poll_details_title: function poll_details_title() {
	            if (!this.polls_details) {
	                return 'Add Poll';
	            } else {
	                return 'Poll ' + this.polls_details.id;
	            }
	        }
	    }
	});

/***/ }
]);