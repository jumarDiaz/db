from django.urls import path
from Apps.ventas.views import VentaDetail, VentaList

app_name='ventas'
urlpatterns = [
    path('', VentaList.as_view()),
    path('<int:pk>', VentaDetail.as_view()),
]
