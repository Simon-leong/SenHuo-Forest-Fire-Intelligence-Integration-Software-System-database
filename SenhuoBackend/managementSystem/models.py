from django.db import models


# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=30, primary_key=True)
    user_password = models.CharField(max_length=30)
    user_name = models.CharField(max_length=30)
    user_isvalid = models.BooleanField()
    user_email = models.CharField(max_length=30)
    user_phone = models.CharField(max_length=30)
    user_notes = models.TextField(max_length=100)
    GENDER_CHOICES = (
        (0, "女"),
        (1, "男"),
    )
    gender = models.IntegerField(choices=GENDER_CHOICES, default=1, verbose_name="性别", null=True, blank=True,
                                 help_text="性别")
    class Meta:
        db_table = "system_users"
        verbose_name = '用户表'
        verbose_name_plural = verbose_name

class UAV(models.Model):
    # uav_id = models.CharField(primary_key=True, max_length=30)
    uav_electric_quantity = models.IntegerField()
    uav_longitude = models.FloatField(default=0)
    uav_latitude = models.FloatField(default=0)
    uav_owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    uav_path = models.FileField()
    uav_description = models.TextField()
    uav_start_time = models.DateTimeField()
    uav_state = models.CharField(max_length=30)
    class Meta:
        db_table = "UAV"
        verbose_name = '无人机表'
        verbose_name_plural = verbose_name


class HighTower(models.Model):
    ht_owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    ht_name = models.CharField(max_length=30)
    ht_longitude = models.FloatField(default=0)
    ht_latitude = models.FloatField(default=0)
    ht_device_state = models.CharField(max_length=30, default='正常')
    class Meta:
        db_table = "HighTowers"
        verbose_name = '高塔表'
        verbose_name_plural = verbose_name


class Satellite(models.Model):
    satellite_name = models.CharField(max_length=30)
    satellite_longitude = models.FloatField(default=0)
    satellite_latitude = models.FloatField(default=0)
    class Meta:
        db_table = "Satellites"
        verbose_name = '卫星表'
        verbose_name_plural = verbose_name
