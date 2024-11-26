from django.contrib import admin  
from django.urls import path,include
from app_vitrine import views 
from app_vitrine.urls import urlpatterns as app_urls  

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/v1/', include('app_vitrine.urls')),  
] + app_urls
