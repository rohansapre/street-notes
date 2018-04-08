"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
import views

urlpatterns = [
    url(r'^$', views.get_news_feed, name="views.get_news_feed"),
    url(r'^admin/', admin.site.urls),
    url(r'^artist/(?P<artist_id>\w+)/?$', views.get_artist_profile, name="views.get_artist_profile"),
    url(r'^feed/?$', views.get_news_feed, name="views.get_news_feed"),
    url(r'^donate/?$', views.donate, name="views.donate"),
    url(r'^subscribe/?$', views.subscribe, name="views.subscribe"),
    url(r'^post/?(?P<post_id>\w+)?/?$', views.post_handler, name="views.post_handler"),
    url(r'^broadcast/?$', views.broadcast, name="views.broadcast"),
]
