from django.db import models
from django.conf import settings

class User(models.Model):
	name = models.CharField(max_length=200, verbose_name='Name', null=False, blank=False)
	email = models.CharField(max_length=200,null=False, blank=False)
	password = models.CharField(max_length=200, null=False, blank=False)
	phone_num= models.IntegerField(null=False, blank=True)

class Artist(models.Model):
	name = models.CharField(max_length=200, verbose_name='Name', null=False, blank=False)
	email = models.CharField(max_length=200, null=False, blank=False)
	password = models.CharField(max_length=200, null=False, blank=False)
	subscribers = models.ManyToManyField(User, blank=True)


class Post(models.Model):
	description = models.CharField(max_length=400, null=False, blank=False)
	userId = models.ForeignKey(User, related_name="post_owner")
	artistId = models.ForeignKey(User, related_name="post_artist")
	upload_date = models.DateTimeField(blank=True, auto_now_add=True)
	
	def getFileName(self):
		return'upload_' + str(self.id)

	def getFilePath(self):
		return 'videos/' + self.getFileName()


