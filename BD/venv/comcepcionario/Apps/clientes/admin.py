from django.contrib import admin
from Apps.clientes.models import Clientes
# Register your models here.

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre','apellido' ,'direccion', 'telefono', 'email')
    search_fields = ('nombre','email')
    list_filter = ('nombre', 'email','direccion')

admin.site.register(Clientes, ClienteAdmin)
