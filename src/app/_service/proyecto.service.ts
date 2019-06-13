import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Proyecto } from '../_model/proyecto';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService():string {
    return "Provando el servicio";
  }
}
