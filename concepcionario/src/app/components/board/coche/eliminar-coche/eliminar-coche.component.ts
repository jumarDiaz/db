import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { CocheI } from 'src/app/models/coches';
import { CochesService } from 'src/app/services/coches.service';
@Component({
  selector: 'app-eliminar-coche',
  templateUrl: './eliminar-coche.component.html',
  styleUrls: ['./eliminar-coche.component.css']
})
export class EliminarCocheComponent implements OnInit{

  public coches:CocheI[] = []
  public msgs1: Message[]=[];
  constructor(
    private CochesService: CochesService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarCliente()
  }

  mostrarCliente() {
    this.CochesService.getAllCohce()
      .subscribe({
        next: (data) => {
          this.coches = data.coche
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/usuario');
    this.CochesService.deleteCcoche(id).subscribe(() => {
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
