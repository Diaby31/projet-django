from django.contrib import admin  
from django.urls import path,include
from app_vitrine import views 
from app_vitrine.urls import urlpatterns as app_urls 
from django.conf import settings
from django.conf.urls.static import static 
from .views import ProduitListView


urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/v1/', include('app_vitrine.urls')), 
    path('', views.home, name='home'),
    path('produits/recherche/', ProduitListView.as_view(), name='produit-recherche'),
 
] + app_urls

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG: 
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]