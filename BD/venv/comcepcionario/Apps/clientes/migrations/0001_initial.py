# Generated by Django 4.2.1 on 2023-05-28 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(help_text='Ingrese el  nombre del cliente', max_length=100)),
                ('apellido', models.CharField(help_text='Ingrese el apellido del cliente', max_length=100)),
                ('direccion', models.CharField(help_text='Ingrese la direccion del cliente', max_length=100)),
                ('telefono', models.CharField(help_text='Ingrese el numero telefonico del cliente', max_length=100)),
                ('email', models.EmailField(help_text='Ingrese el Email del cliente', max_length=300)),
            ],
            options={
                'verbose_name': 'cliente',
                'verbose_name_plural': 'clientes',
            },
        ),
    ]
