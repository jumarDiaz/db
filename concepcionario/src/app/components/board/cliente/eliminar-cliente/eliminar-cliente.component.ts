import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { ClienteI } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit{
  public clientes:ClienteI[] = []
  public msgs1: Message[]=[];
  constructor(
    private ClienteService: ClienteService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarCliente()
  }

  mostrarCliente() {
    this.ClienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/usuario');
    this.ClienteService.deleteCliente(id).subscribe(() => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Usuario Eliminado', life:5000});
        this.mostrarCliente();
      },
      err => {
        console.log(err);
        console.log('No se ha eliminado correctamente');

      }
    );
  }

}
