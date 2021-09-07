from django.shortcuts import render
from .models import Staff
from .serializers import StaffSerializers
from rest_framework import mixins
from rest_framework import generics

# Create your views here.

class StaffAPI(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializers

    lookup_filed = 'staff_id'

    def get(sef, request, staff_id = None):
        if staff_id:
            return sef.retrieve(request)
        else:
            return  sef.list(request)