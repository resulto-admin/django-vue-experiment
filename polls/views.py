import json
from django.shortcuts import render
from django.views.generic import View

from polls.models import Poll
from polls.serializers import PollsListSerializer

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
        return render(request, "polls/details.html.j2", context)
