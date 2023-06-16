from django.db import models
from Apps.clientes.models import Clientes
from Apps.coches.models import Coches
# Create your models here.
class Ventas(models.Model):
    fecha_venta = models.DateField(help_text="Ingrese la fecha cuando se realizo la venta")
    precio_venta = models.FloatField(help_text="Ingrese el precio de la venta")
    cliente = models.ForeignKey(Clientes, on_delete=models.CASCADE, blank=False, default=None)
    coche = models.ForeignKey(Coches, on_delete=models.CASCADE, blank=False, default=None)

def __str__(self):
    return self.fecha_ventaVentas

class Meta:
    verbose_name = "venta"
    verbose_name_plural = "ventas"