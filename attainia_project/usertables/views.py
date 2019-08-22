from django.shortcuts import render, render_to_response
from django.http import HttpResponse, JsonResponse
import json

def page1(request):
    return render(request, 'usertables/page1.html')

def page2(request):
	return render(request, 'usertables/page2.html')

def users(request):
	json_data = json.load(open('usertables/static/users.json'))
	return JsonResponse(json_data, safe=False)



