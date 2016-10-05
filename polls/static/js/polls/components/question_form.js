var template = require('./question_form.html');

var component = {
    template: template,
    props: ['question', 'question_formset', 'form', 'index'],
    data: function() {
        // TODO Call method here and put computed properties in data
        // Props are loaded when data() is called
        return {
            isDeleted: false
        };
    },
    methods: {
        namify: function(value) {
            return this.question_formset.field_name_template.replace('{id}', this.index).replace('{field_name}', value);
        },
        idfy: function(value) {
            return this.question_formset.field_id_template.replace('{id}', this.index).replace('{field_name}', value);
        },
    }
};

module.exports = component;
