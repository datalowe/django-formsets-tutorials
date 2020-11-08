from django.urls import path

from .views import treasureform_view

urlpatterns = [
    path('', treasureform_view)
]
