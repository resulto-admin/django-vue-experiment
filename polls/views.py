import json
from django.shortcuts import render
from django.views.generic import View

from polls.forms import PollForm, QuestionFormSet
from polls.form_serializer import (
    convert_form_to_json_dict, convert_formset_to_json_dict)
from polls.models import Poll, Question
from polls.serializers import PollsListSerializer, PollsDetailsSerializer

# Create your views here.


class PollsList(View):

    def get(self, request):
        context = {}
        polls_serializer = PollsListSerializer(Poll.objects.all(), many=True)
        context = {"polls_list_json": json.dumps(polls_serializer.data)}
        return render(request, "polls/list.html.j2", context)


class PollsDetails(View):

    def get(self, request, poll_id=None):
        context = {}
        if poll_id:
            poll = Poll.objects.get(pk=poll_id)
            polls_details_serializer = PollsDetailsSerializer(
                poll)
            polls_details = polls_details_serializer.data
            polls_form = PollForm(instance=poll)
            questions_formset = QuestionFormSet(
                queryset=Question.objects.filter(poll=poll))
        else:
            polls_details = {}
            polls_form = PollForm()
            questions_formset = QuestionFormSet(
                queryset=Question.objects.none())

        context = {
            "polls_details_json": json.dumps(
                polls_details),
            "polls_form_json": json.dumps(convert_form_to_json_dict(
                polls_form)),
            "questions_formset_json": json.dumps(convert_formset_to_json_dict(
                questions_formset))
        }
        return render(request, "polls/details.html.j2", context)
