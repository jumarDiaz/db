from django.urls import path
from Apps.coches.views import  CocheList, CocheDetail

app_name = 'coches'
urlpatterns = [
    path('', CocheList.as_view()),
    path('<int:pk>', CocheDetail.as_view()),
]
