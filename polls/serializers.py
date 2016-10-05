from django.urls import reverse
from rest_framework import serializers
from polls.models import Poll


class PollsListSerializer(serializers.ModelSerializer):

    poll_url = serializers.SerializerMethodField()

    def get_poll_url(self, obj):
        return reverse("polls:polls_details", kwargs={"poll_id": obj.pk})

    class Meta:
        model = Poll
        fields = ('id', 'title', 'poll_url')
