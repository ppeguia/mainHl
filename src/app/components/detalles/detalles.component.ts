import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../_model/proyecto';
import { Global } from '../../_service/global';
import { ProyectoService } from '../../_service/proyecto.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  providers: [ProyectoService]
})
export class DetallesComponent implements OnInit {

  public url: string;
  public proyecto: Proyecto;

  constructor(private _proyectoService: ProyectoService,
              private _router: Router,
              private _route: ActivatedRoute) { 
    this.url = Global.url;
    this.proyecto = new Proyecto('','','','','',0,'');
  }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      this.getProjecto(params.id);
    });
  }

  getProjecto(id: string){
    this._proyectoService.getProyectoId(id).subscribe(
      response =>{
        this.proyecto = response.proyecto;
    },error =>{
      console.log(<any>error);
    });
  }

}
