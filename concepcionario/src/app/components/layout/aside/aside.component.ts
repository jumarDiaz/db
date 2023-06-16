import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Clientes',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'Agregar Cliente',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: 'agregarCliete'
              },
              {
                label: 'Mostrar Clientes',
                icon: 'pi pi-search',
                routerLink: 'mostrar'

              },
              {
                label: 'Borrar Clientes',
                icon: 'pi pi-fw pi-trash',
                routerLink: 'borrarCliente'

              },
          ]
      },
      {
        label: 'Coche',
        icon: '',
        items: [
            {
                label: 'Agregar Coche',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'agregarCoche'

            },
            {
              label: 'Mostrar Coches',
              icon: 'pi pi-search',
              routerLink: 'mostrarCoche'

            },
            {
              label: 'Borrar Coche',
              icon: 'pi pi-fw pi-trash',
              routerLink: 'borrarCoche'

            },
        ]
      },
      {
        label: 'Marca',
        icon: '',
        items: [
            {
                label: 'Agregar Marca',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'agregarMarca'

            },
            {
              label: 'Mostrar Marcas',
              icon: 'pi pi-search',
              routerLink: 'mostrarMarca'

            },
            {
              label: 'Borrar Marca',
              icon: 'pi pi-fw pi-trash',
              routerLink: 'borrarMarca'

            },
        ]
      },
      {
        label: 'Venta',
        icon: '',
        items: [
            {
                label: 'Agregar Venta',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'agregarVenta'

            },
            {
              label: 'Mostrar Venta',
              icon: 'pi pi-search',
              routerLink: 'mostrarVenta'

            },
            {
              label: 'Borrar Venta',
              icon: 'pi pi-fw pi-trash',
              routerLink: 'borrarVenta'

            },
        ]
      },
      
  ];
  }
}
