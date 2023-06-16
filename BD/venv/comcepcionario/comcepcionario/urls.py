from django.contrib import admin
from django.urls import path
from django.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('coches/', include('Apps.coches.urls')),
    path('clientes/', include('Apps.clientes.urls')),
    path('ventas/', include('Apps.ventas.urls')),
    # path('marcas/', include('Apps.coches.urls')),

]
