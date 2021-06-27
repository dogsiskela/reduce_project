from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
# Create your models here.




class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='src/profiles/profile_icon/', default = 'src/profiles/profile_icon/default.jpg')
    traveling_footprint = models.IntegerField(default=0)
    transport_footprint = models.IntegerField(default=0)
    food_footprint = models.IntegerField(default=0)
    home_footprint = models.IntegerField(default=0)
    shopping_footprint = models.IntegerField(default=0)
    description = models.TextField(max_length=160, default="")

    def __str__(self):
        return self.user.username


