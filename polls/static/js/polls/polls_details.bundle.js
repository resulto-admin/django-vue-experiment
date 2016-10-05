webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);

	var pollForm = __webpack_require__(2);

	new Vue({
	    el: '#polls-details',
	    data: window.polls,
	    components: {
	        'vs-poll-form': pollForm
	    }
	});

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

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(3);
	var questionForm = __webpack_require__(4);

	var component = {
	    template: template,
	    props: ['poll', 'poll_form', 'question_formset'],
	    components: {
	        'vs-question-form': questionForm
	    },
	    methods: {
	        addQuestion: function addQuestion() {
	            this.poll.questions.push({
	                title: 'New Title',
	                internal_note: ''
	            });
	        }
	    }
	};

	module.exports = component;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<form>\n    {{poll_form.fields.title.label}}<br>\n    <input :name=\"poll_form.fields.title.html_name\" :id=\"poll_form.fields.title.id\" v-model=\"poll.title\" :maxlength=\"poll_form.fields.title.attrs.maxlength\"><br>\n    {{poll_form.fields.description.label}}<br>\n    <textarea :name=\"poll_form.fields.description.html_name\" :id=\"poll_form.fields.description.id\" v-model=\"poll.description\" :cols=\"poll_form.fields.description.attrs.cols\" :rows=\"poll_form.fields.description.attrs.rows\"></textarea><br>\n\n    <h3>Questions</h3>\n    <vs-question-form v-for=\"(question, index) in poll.questions\" :question=question :question_formset=\"question_formset\" :form=\"question_formset.forms[index]\" :index=\"index\"></vs-question-form>\n\n    <button type=\"button\" v-on:click=\"addQuestion\">Add question</button>\n\n</form>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(5);

	var component = {
	    template: template,
	    props: ['question', 'question_formset', 'form', 'index'],
	    data: function data() {
	        // TODO Call method here and put computed properties in data
	        // Props are loaded when data() is called
	        return {
	            isDeleted: false
	        };
	    },
	    methods: {
	        namify: function namify(value) {
	            return this.question_formset.field_name_template.replace('{id}', this.index).replace('{field_name}', value);
	        },
	        idfy: function idfy(value) {
	            return this.question_formset.field_id_template.replace('{id}', this.index).replace('{field_name}', value);
	        }
	    }
	};

	module.exports = component;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <div v-show=\"!isDeleted\">\n        {{question_formset.extra_form.fields.title.label}}<br>\n        <input :name=\"namify('title')\" :id=\"idfy('title')\" v-model=\"question.title\"><br>\n        <input type=\"hidden\" :name=\"namify('DELETE')\" :id=\"idfy('DELETE')\" :value=\"isDeleted ? 'on' : ''\">\n        <button type=\"button\" v-on:click=\"isDeleted = true\">Delete</button>\n    </div>\n    <button v-show=\"isDeleted\" type=\"button\" v-on:click=\"isDeleted = false\">Undo</button>\n</div>\n";

/***/ }
]);