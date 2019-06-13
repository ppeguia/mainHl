import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../_model/proyecto';
import { ProyectoService } from '../../_service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  providers: [ProyectoService]
})
export class ProyectoComponent implements OnInit {

  public title: string;
  public proyecto: Proyecto;

  constructor( private servProyecto: ProyectoService) { 
    this.title = "crear proyecto";
    this.proyecto = new Proyecto('','','','','',0,'');

    
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    console.log(this.proyecto);
  }

}
