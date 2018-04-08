from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie


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
	return JsonResponse({})

