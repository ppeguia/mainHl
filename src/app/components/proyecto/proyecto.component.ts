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
  public status: string;

  constructor( private servProyecto: ProyectoService) { 
    this.title = "crear proyecto";
    this.proyecto = new Proyecto('','','','','',0,''); 
  }

  ngOnInit() {
  }

  onSubmit(form){
    this.servProyecto.save(this.proyecto).subscribe(
      respose =>{
        if(respose.proyecto){
          this.status = 'suscess';
          form.reset();
        }else{
          this.status = 'failed';
        }
        console.log(respose);
      },
      error =>{
        this.status = 'failed';
        console.log(<any>error);
      }
      
    );
  }

}
