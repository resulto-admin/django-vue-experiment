from polls.models import Poll, Question
from django.forms import ModelForm, modelformset_factory


class PollForm(ModelForm):

    class Meta:
        model = Poll
        fields = ["title", "description"]


class QuestionForm(ModelForm):

    class Meta:
        model = Question
        fields = ["title", "internal_note"]


QuestionFormSet = modelformset_factory(
    Question, form=QuestionForm, extra=1, can_delete=True)
