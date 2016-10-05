def convert_form_to_json_dict(form):
    form_dict = {}
    fields_sequence = []
    fields_dict = {}
    for field_name in form.fields:
        bound_field = form[field_name]
        field = bound_field.field
        fields_sequence.append(field_name)
        fields_dict[field_name] = {
            "field_name": field_name,
            "id": bound_field.auto_id,
            "html_name": bound_field.html_name,
            "label": bound_field.label,
            "help_text": bound_field.help_text,
            "attrs": field.widget.attrs,
            "required": field.required,
            "errors": bound_field.errors
        }

    form_dict = {
        "fields": fields_dict,
        "fields_sequence": fields_sequence,
        "errors": form.non_field_errors(),
        "has_errors": bool(form.errors),
    }

    return form_dict
