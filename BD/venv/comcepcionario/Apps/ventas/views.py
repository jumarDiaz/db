from django.shortcuts import render
from django.http import Http404

from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework import status


from django.http import HttpResponse
from Apps.ventas.models import Ventas
from Apps.ventas.serializers import VentasSerializer
# Create your views here.


class VentaList(APIView):
    """
    Lista de Clientes
    """

    def get(self, request, format=None):
        venta = Ventas.objects.all()
        data = {"results": list(venta.values("fecha_venta", "precio_venta", "cliente", "coche"))}
        print(data)
        serializer = VentasSerializer(venta, many=True)
        return Response({"venta":serializer.data})


    def post(self, request, format=None):
        serializer = VentasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VentaDetail(APIView):
    """
    Retrieve, update or delete de los clientes por pk
    """
    def get_object(self, pk):
        # Returns an object instance that should 
        # be used for detail views.
        try:
            return Ventas.objects.get(pk=pk)
        except Ventas.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        venta = self.get_object(pk)
        serializer = VentasSerializer(venta)
        return Response({"ventas":serializer.data})

    def put(self, request, pk, format=None):
        venta = self.get_object(pk)
        serializer = VentasSerializer(venta, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        venta = self.get_object(pk)
        venta.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)