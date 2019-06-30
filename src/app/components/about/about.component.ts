import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../_service/proyecto.service';
import { Proyecto } from '../../_model/proyecto';
import { Global } from '../../_service/global'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [ ProyectoService ]
})
export class AboutComponent implements OnInit {
 
  public proyectos: Proyecto[];
  public url: string;

  constructor( private _proyectoService: ProyectoService ) {
    this.url = Global.url;
   }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos(){
    this._proyectoService.getProyectos().subscribe(
      response =>{
        console.log(response);
        if(response.proyectos){
          this.proyectos = response.proyectos;
        }else{
          
        }

      },
      error =>{
        console.log(<any>error)
      }
    );
  }


}
