from django.shortcuts import render
from django.http import Http404

from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework import status


from django.http import HttpResponse
from Apps.coches.models import Coches, Marcas
from Apps.coches.serializers import CochesSerializer, MarcaSerializer
# Create your views here.


class CocheList(APIView):
    """
    Lista de Coches
    """

    def get(self, request, format=None):
        coche = Coches.objects.all()
        data = {"results": list(coche.values("modelo", "color", "ano", "precio", "marca"))}
        print(data)
        serializer = CochesSerializer(coche, many=True)
        return Response({"coche ":serializer.data})


    def post(self, request, format=None):
        serializer = CochesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CocheDetail(APIView):
    """
    Retrieve, update or delete de los clientes por pk
    """
    def get_object(self, pk):
        # Returns an object instance that should 
        # be used for detail views.
        try:
            return Coches.objects.get(pk=pk)
        except Coches.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        coche = self.get_object(pk)
        serializer = CochesSerializer(coche)
        return Response({"coches":serializer.data})

    def put(self, request, pk, format=None):
        coche = self.get_object(pk)
        serializer = CochesSerializer(coche, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        coche = self.get_object(pk)
        coche.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)