from django.urls import reverse
from rest_framework import serializers
from polls.models import Poll, Question


class PollsListSerializer(serializers.ModelSerializer):

    poll_url = serializers.SerializerMethodField()

    def get_poll_url(self, obj):
        return reverse("polls:polls_details", kwargs={"poll_id": obj.pk})

    class Meta:
        model = Poll
        fields = ('id', 'title', 'poll_url')


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('title', 'internal_note')


class PollsDetailsSerializer(serializers.ModelSerializer):

    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Poll
        fields = ('id', 'title', 'description', 'questions')
