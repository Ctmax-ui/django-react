from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('beta/', views.react_app, name='react_app'),
    path('beta/<path:path>', views.react_app),
]