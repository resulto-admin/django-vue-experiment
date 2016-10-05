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
            "errors": bound_field.errors,
            "value": bound_field.value()
        }

    form_dict = {
        "fields": fields_dict,
        "fields_sequence": fields_sequence,
        "errors": form.non_field_errors(),
        "has_errors": bool(form.errors),
    }

    return form_dict


def convert_formset_to_json_dict(formset):
    formset_dict = {}
    prefix = formset.prefix
    field_name_template = "{prefix}-{{id}}-{{field_name}}".format(
        prefix=prefix)
    field_id_template = "id_{prefix}-{{id}}-{{field_name}}".format(
        prefix=prefix)
    formset_dict["management_form"] = _get_management_form(formset)

    forms = []
    for form in formset.forms:
        forms.append(convert_form_to_json_dict(form))

    formset_dict["forms"] = forms[:-1]
    formset_dict["extra_form"] = forms[-1]
    formset_dict["field_id_template"] = field_id_template
    formset_dict["field_name_template"] = field_name_template

    return formset_dict


def _get_management_form(formset):
    fields = {}
    form = formset.management_form
    for field_name in form.fields:
        bound_field = form[field_name]
        fields[field_name] = {
            "field_name": field_name,
            "id": bound_field.auto_id,
            "html_name": bound_field.html_name,
            "value": bound_field.value()
        }
        if field_name == "TOTAL_FORMS":
            fields[field_name]["value"] -= 1
    form_dict = {
        "fields": fields
    }
    return form_dict
