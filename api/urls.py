from django.urls import path
from .views import StaffAPI

urlpatterns = [
    path('staff/',StaffAPI.as_view() ),
     
]