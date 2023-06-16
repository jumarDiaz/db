from django.db import models

# Create your models here.
class Marcas(models.Model):
    nombre = models.CharField(max_length=100, help_text= "Ingrese la marca")

    def __str__(self):
        return self.modeloCoches

    class Meta:
        verbose_name = "marca"
        verbose_name_plural = "marcas"


class Coches(models.Model):
    modelo = models.CharField(max_length=100, help_text="Ingrese el  modelo del coche")
    color = models.CharField(max_length=100, help_text="Ingrese el color del coche")
    ano = models.IntegerField(help_text="Ingrese el año de fabricacion")
    precio = models.FloatField( help_text="Ingrese el precio del coche")
    marca = models.ForeignKey(Marcas, on_delete=models.CASCADE, blank=False, default=None)

    def __str__(self):
        return self.modeloCoches

    class Meta:
        verbose_name = "coche"
        verbose_name_plural = "coches"