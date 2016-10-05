webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);

	var pollListItem = __webpack_require__(2);

	new Vue({
	    el: '#polls-list',
	    data: window.polls,
	    components: {
	        'vs-poll-list-item': pollListItem
	    }
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(3);

	var component = {
	    template: template,
	    props: ['poll']
	};

	module.exports = component;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<li>\n    <a :href=\"poll.poll_url\">{{poll.title}}</a>\n</li>\n";

/***/ }
]);