import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AgregarClienteComponent } from './components/board/cliente/agregar-cliente/agregar-cliente.component';
import { ActualizarClienteComponent } from './components/board/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/board/cliente/eliminar-cliente/eliminar-cliente.component';
import { EliminarCocheComponent } from './components/board/coche/eliminar-coche/eliminar-coche.component';
import { AgregarCocheComponent } from './components/board/coche/agregar-coche/agregar-coche.component';
import { MostrarCochesComponent } from './components/board/coche/mostrar-coches/mostrar-coches.component';
import { ActualizarCochesComponent } from './components/board/coche/actualizar-coches/actualizar-coches.component';
import { ActualizarMarcasComponent } from './components/board/marca/actualizar-marcas/actualizar-marcas.component';
import { AgregarMarcasComponent } from './components/board/marca/agregar-marcas/agregar-marcas.component';
import { MostrarMarcasComponent } from './components/board/marca/mostrar-marcas/mostrar-marcas.component';
import { EliminarMarcasComponent } from './components/board/marca/eliminar-marcas/eliminar-marcas.component';
import { EliminarVentaComponent } from './components/board/venta/eliminar-venta/eliminar-venta.component';
import { MostrarVentasComponent } from './components/board/venta/mostrar-ventas/mostrar-ventas.component';
import { AgregarVentasComponent } from './components/board/venta/agregar-ventas/agregar-ventas.component';
import { ActualizarVentasComponent } from './components/board/venta/actualizar-ventas/actualizar-ventas.component';
import { AsideComponent } from './components/layout/aside/aside.component';

import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { MostrarComponent } from './components/board/cliente/mostrar/mostrar.component';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteService } from './services/cliente.service';
import { CochesService } from './services/coches.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AgregarClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent,
    EliminarCocheComponent,
    AgregarCocheComponent,
    MostrarCochesComponent,
    ActualizarCochesComponent,
    ActualizarMarcasComponent,
    AgregarMarcasComponent,
    MostrarMarcasComponent,
    EliminarMarcasComponent,
    EliminarVentaComponent,
    MostrarVentasComponent,
    AgregarVentasComponent,
    ActualizarVentasComponent,
    AsideComponent,
    MostrarComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClienteService,
    CochesService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
