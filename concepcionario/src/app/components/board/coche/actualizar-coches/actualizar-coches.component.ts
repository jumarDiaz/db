import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { CocheI } from 'src/app/models/coches';
import { CochesService } from 'src/app/services/coches.service';
@Component({
  selector: 'app-actualizar-coches',
  templateUrl: './actualizar-coches.component.html',
  styleUrls: ['./actualizar-coches.component.css']
})
export class ActualizarCochesComponent implements OnInit{

  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getUsuario(this.id);

  }



  getUsuario(id: number){
    this.CochesService.getOneCoche(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.coche)
      }
    })
  }

  onSubmit() {
    const formValue: CocheI = this.form.value;
    const id: number = this.id
    console.log(formValue)
    console.log(id)
    this.CochesService.updateCcoche(id, formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('mostrarCoche');

      },
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

