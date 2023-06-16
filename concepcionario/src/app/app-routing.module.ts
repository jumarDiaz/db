import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/board/cliente/actualizar-cliente/actualizar-cliente.component';
import { AgregarClienteComponent } from './components/board/cliente/agregar-cliente/agregar-cliente.component';
import { EliminarClienteComponent } from './components/board/cliente/eliminar-cliente/eliminar-cliente.component';
import { AgregarCocheComponent } from './components/board/coche/agregar-coche/agregar-coche.component';
import { ActualizarCochesComponent } from './components/board/coche/actualizar-coches/actualizar-coches.component';
import { MostrarCochesComponent } from './components/board/coche/mostrar-coches/mostrar-coches.component';
import { EliminarCocheComponent } from './components/board/coche/eliminar-coche/eliminar-coche.component';
import { AgregarMarcasComponent } from './components/board/marca/agregar-marcas/agregar-marcas.component';
import { ActualizarMarcasComponent } from './components/board/marca/actualizar-marcas/actualizar-marcas.component';
import { MostrarMarcasComponent } from './components/board/marca/mostrar-marcas/mostrar-marcas.component';
import { EliminarMarcasComponent } from './components/board/marca/eliminar-marcas/eliminar-marcas.component';
import { EliminarVentaComponent } from './components/board/venta/eliminar-venta/eliminar-venta.component';
import { MostrarVentasComponent } from './components/board/venta/mostrar-ventas/mostrar-ventas.component';
import { ActualizarVentasComponent } from './components/board/venta/actualizar-ventas/actualizar-ventas.component';
import { AgregarVentasComponent } from './components/board/venta/agregar-ventas/agregar-ventas.component';
import { MostrarComponent } from './components/board/cliente/mostrar/mostrar.component';
const routes: Routes = [

  {
    path: 'agregarCliete',
    component: AgregarClienteComponent
  },
  {
    path: 'mostrar/edit/:id',
    component: ActualizarClienteComponent
  },
  {
    path: 'mostrar',
    component: MostrarComponent
  },
  {
    path: 'borrarCliente',
    component: EliminarClienteComponent
  },
  {
    path: 'agregarCoche',
    component: AgregarCocheComponent
  },
  {
    path: 'mostrarCoche/edit/:id',
    component: ActualizarCochesComponent
  },
  {
    path: 'mostrarCoche',
    component: MostrarCochesComponent
  },
  {
    path: 'borrarCoche',
    component: EliminarCocheComponent
  },
  {
    path: 'agregarMarca',
    component: AgregarMarcasComponent
  },
  {
    path: 'actualizarMarca',
    component: ActualizarMarcasComponent
  },
  {
    path: 'mostrarMarca',
    component: MostrarMarcasComponent
  },
  {
    path: 'borrarMarca',
    component: EliminarMarcasComponent
  },
  {
    path: 'agregarVenta',
    component: AgregarVentasComponent
  },
  {
    path: 'actualizarVenta',
    component: ActualizarVentasComponent
  },
  {
    path: 'mostrarVenta',
    component: MostrarVentasComponent
  },
  {
    path: 'borrarVenta',
    component: EliminarVentaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
