from django.contrib import admin
from Apps.ventas.models import Ventas
# Register your models here.

class VentaAdmin(admin.ModelAdmin):
    list_display =('fecha_venta','precio_venta','cliente','coche')
    search_fields =('fecha_venta','cliente','coche')
    list_filter =('fecha_venta','cliente')

admin.site.register(Ventas, VentaAdmin)
