# Generated by Django 4.2.1 on 2023-05-28 05:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coches', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coches',
            name='precio',
            field=models.FloatField(help_text='Ingrese el precio del coche'),
        ),
    ]
