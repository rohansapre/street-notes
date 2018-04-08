from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from twilio.rest import Client
import os
from models import *


def get_artist_profile(request, artist_id):
	return JsonResponse({})


def get_news_feed(request):
	return JsonResponse({})


def donate(request):
	return JsonResponse({})


def subscribe(request):
	return JsonResponse({})


@csrf_exempt
def post_handler(request, post_id=None):
	if request.method == 'GET':
		return JsonResponse({})
	elif request.method == 'POST':
		return JsonResponse({})


def broadcast(request):
	account_sid = os.getenv("twilioSID")
	auth_token  = os.getenv("twilioAuthToken")

	client = Client(account_sid, auth_token)


	message = client.messages.create(
	    to="", 
	    from_=os.getenv("twilioFromPhoneNumber"),
	    body="Hello from Python!")

	print(message.sid)

