from django.db import models

# Create your models here.


class Poll(models.Model):

    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)


class Question(models.Model):

    title = models.CharField(max_length=250)
    internal_note = models.TextField(blank=True)
    poll = models.ForeignKey(Poll)
