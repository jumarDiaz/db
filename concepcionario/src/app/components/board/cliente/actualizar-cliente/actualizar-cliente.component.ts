import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { ClienteI } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit{
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    email: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private ClienteService: ClienteService,
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
    this.ClienteService.getOneCliente(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.cliente)
      }
    })
  }

  onSubmit() {
    const formValue: ClienteI = this.form.value;
    const id: number =  this.form.value.id
    this.ClienteService.updateCliente(id, formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('mostrar');

      },
    );
  }

  cancel() {
    this.router.navigateByUrl('mostrar');
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  get email() { return this.form.get('email'); }

}
