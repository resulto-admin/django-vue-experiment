webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);

	var pollListItem = __webpack_require__(6);

	new Vue({
	    el: '#polls-list',
	    data: window.polls,
	    components: {
	        'vs-poll-list-item': pollListItem
	    }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(7);

	var component = {
	    template: template,
	    props: ['poll']
	};

	module.exports = component;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<li>\n    <a :href=\"poll.poll_url\">{{poll.title}}</a>\n</li>\n";

/***/ }
]);