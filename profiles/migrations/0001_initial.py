# Generated by Django 3.1.7 on 2021-06-27 01:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_picture', models.ImageField(default='src/profiles/profile_icon/default.jpg', upload_to='src/profiles/profile_icon/')),
                ('traveling_footprint', models.IntegerField(default=0)),
                ('transport_footprint', models.IntegerField(default=0)),
                ('food_footprint', models.IntegerField(default=0)),
                ('home_footprint', models.IntegerField(default=0)),
                ('shopping_footprint', models.IntegerField(default=0)),
                ('description', models.TextField(default='', max_length=160)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]