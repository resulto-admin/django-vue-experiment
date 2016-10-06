from django.conf.urls import url
from polls.views import PollsList, PollsDetails, PollsTable

urlpatterns = [
    url(r"^$", PollsList.as_view(), name="polls_list"),
    url(r"^(?P<poll_id>\d+)/$", PollsDetails.as_view(), name="polls_details"),
    url(r"add/$", PollsDetails.as_view(), name="polls_add"),
    url(r"table/$", PollsTable.as_view(), name="polls_table"),
]
