from django.db import models

# Create your models here.
class Clientes(models.Model):
    nombre = models.CharField(max_length=100, help_text="Ingrese el  nombre del cliente")
    apellido = models.CharField(max_length=100, help_text="Ingrese el apellido del cliente")
    direccion = models.CharField(max_length=100, help_text="Ingrese la direccion del cliente")
    telefono = models.CharField(max_length=100, help_text="Ingrese el numero telefonico del cliente")
    email = models.EmailField(max_length=300, help_text="Ingrese el Email del cliente")


    def __str__(self):
        return self.nombre11

    class Meta:
        verbose_name = "cliente"
        verbose_name_plural = "clientes"