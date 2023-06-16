from django.contrib import admin
from Apps.coches.models import Coches, Marcas
# Register your models here.

class CocheAdmin(admin.ModelAdmin):
    list_display =('modelo','color','ano','precio','marca')
    search_fields =('modelo','marca','color')
    list_filter =('modelo','marca')


class MarcasAdmin(admin.ModelAdmin):
    list_display =['nombre']
    search_fields =['nombre']
    list_filter =['nombre']

admin.site.register(Coches, CocheAdmin)
admin.site.register(Marcas, MarcasAdmin)