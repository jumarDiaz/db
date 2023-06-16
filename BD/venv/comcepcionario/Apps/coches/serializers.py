from dataclasses import field
from statistics import mode

from rest_framework import serializers
from Apps.coches.models import Coches, Marcas

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcas
        fields = "__all__"

class CochesSerializer(serializers.ModelSerializer):
    marca = serializers.PrimaryKeyRelatedField(queryset=Marcas.objects.all())

    class Meta:
        model = Coches
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        marca = instance.marca
        marca_serializer = MarcaSerializer(marca)
        representation['marca'] = marca_serializer.data
        return representation
    
    def validate_nombre(self, value):
        if len(value) < 3:
            raise serializers.ValidationError('Nombre no puede ser tan corto')
        else:
            return value

