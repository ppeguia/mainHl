import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../_model/proyecto';
import { Global } from '../../_service/global';
import { ProyectoService } from '../../_service/proyecto.service';

@Component({
  selector: 'app-editar-projecto',
  templateUrl: './editar-projecto.component.html',
  providers:[ProyectoService]
})
export class EditarProjectoComponent implements OnInit {

  public proyecto: Proyecto;

  constructor(private _proyectoService: ProyectoService) { 
    this.proyecto = new Proyecto('','','','','',0,'');
  }

  ngOnInit() {
  }

  getUpdateProyecto(){
    this._proyectoService.updateProyectoId(this.proyecto).subscribe(
      response=>{
        console.log(response);
      },
      error =>{
        console.log(<any>error )
      }
    );
  }


}
