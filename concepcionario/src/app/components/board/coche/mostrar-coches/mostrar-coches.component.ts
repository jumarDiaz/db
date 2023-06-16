import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CochesService } from 'src/app/services/coches.service';
import { CocheI } from 'src/app/models/coches';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-coches',
  templateUrl: './mostrar-coches.component.html',
  styleUrls: ['./mostrar-coches.component.css']
})
export class MostrarCochesComponent implements OnInit {
  public coches:CocheI[] = []
  public displayedColumns: string[] = ["id", "modelo", "color", "ano", "precio","marca"]
  constructor(
    private CochesService: CochesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCoche()
  }

  mostrarCoche() {
    this.CochesService.getAllCohce()
      .subscribe({
        next: (data) => {
          this.coches = data.coche
          console.log(this.coches )
        }
      })
  }
}
