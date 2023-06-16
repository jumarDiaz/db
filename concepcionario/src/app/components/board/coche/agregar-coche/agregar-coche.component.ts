import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { CocheI } from 'src/app/models/coches';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-agregar-coche',
  templateUrl: './agregar-coche.component.html',
  styleUrls: ['./agregar-coche.component.css']
})
export class AgregarCocheComponent implements OnInit{


  public form:FormGroup=this.formBuilder.group({
    modelo: ['', [Validators.required]],
    color: ['', [Validators.required]],
    ano: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    marca: ['', [Validators.required]],


  });

  constructor(
    private formBuilder: FormBuilder,
    private CochesService: CochesService,
    private messageService: MessageService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: CocheI = this.form.value;
    // console.log(formValue);
    this.CochesService.createCoche(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');
        setTimeout(()=>{
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Coche Creado', life:5000});

         }, 0);

        this.router.navigateByUrl('mostrarCoche');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');

      }
    );
  }

  cancel() {
    this.router.navigateByUrl('mostrarCoche');
  }

  get modelo() { return this.form.get('modelo'); }
  get color() { return this.form.get('color'); }
  get ano() { return this.form.get('ano'); }
  get precio() { return this.form.get('precio'); }
  get marca() { return this.form.get('marca'); }

}
