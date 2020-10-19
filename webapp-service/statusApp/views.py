from django.shortcuts import render
from django.http import HttpResponse
import os

# Create your views here.
def index(request):
    statusFile = open("status.txt", "r")
    status = statusFile.read()
    #path = os.getcwd()
    return HttpResponse("The Connection Hypothesis API is " + status)