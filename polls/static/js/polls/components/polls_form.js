var template = require('./polls_form.html');
var questionForm = require('polls/components/question_form');

var component = {
    template: template,
    props: ['poll', 'poll_form', 'question_formset'],
    components: {
        'vs-question-form': questionForm
    },
    methods: {
        addQuestion: function() {
            this.poll.questions.push({
                title: 'New Title',
                internal_note: ''
            });
        }
    }
};

module.exports = component;
