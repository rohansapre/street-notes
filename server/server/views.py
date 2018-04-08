from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from twilio.rest import Client
import os
from models import *
import json

def get_artist_profile(request, artist_id):
	artist = Artist.objects.filter(id=artist_id)
	return JsonResponse({json.dumps(artist)})

def get_news_feed(request):
	posts = Post.objects.all().order_by("-upload_date")[:10]
	return JsonResponse({json.dumps(posts)})


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

