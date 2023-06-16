from dataclasses import field
from statistics import mode

from rest_framework import serializers
from Apps.ventas.models import Ventas
from Apps.clientes.models import Clientes
from Apps.coches.models import Coches
from Apps.coches.serializers import CochesSerializer
from Apps.clientes.serializers import ClienteSerializer

class VentasSerializer(serializers.ModelSerializer):
    cohe = serializers.PrimaryKeyRelatedField(queryset = Coches.objects.all())
    cliente = serializers.PrimaryKeyRelatedField(queryset = Clientes.objects.all())

    class Meta:
        model = Ventas
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        cohe = instance.cohe
        cliente = instance.cliente
        cohe_serializer = CochesSerializer(cohe)
        cliente_serializer = ClienteSerializer(cliente)
        representation['coche'] = cohe_serializer.data
        representation['cliente'] = cliente_serializer.data
        return representation
    
    def validate_nombre(self, value):
        if len(value) < 3:
            raise serializers.ValidationError('Nombre no puede ser tan corto')
        else:
            return value

