import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Router } from '@angular/router';

import { CocheI } from 'src/app/models/coches';
import { CochesService } from 'src/app/services/coches.service';
@Component({
  selector: 'app-mostrar-marcas',
  templateUrl: './mostrar-marcas.component.html',
  styleUrls: ['./mostrar-marcas.component.css']
})
export class MostrarMarcasComponent{
  // public mar:CocheI[] = []
  // public displayedColumns: string[] = ["id", "marca"]
  // constructor(
  //   private CochesService: CochesService,
  //   private router: Router
  // ) { }

  // ngOnInit(): void {
  //   this.mostrarCoche()
  // }

  // mostrarCoche() {
  //   this.CochesService.getAllCohce()
  //     .subscribe({
  //       next: (data) => {
  //         this.mar = data.coche
  //       }
  //     })
  // }

}
