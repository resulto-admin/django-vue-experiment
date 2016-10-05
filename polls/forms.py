from polls.models import Poll
from django.forms import ModelForm


class PollForm(ModelForm):

    class Meta:
        model = Poll
        fields = ["title", "description"]
