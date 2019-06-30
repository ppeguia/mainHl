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

  save(proyecto:Proyecto):Observable<any> {
    let params = JSON.stringify(proyecto);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'/proyecto',params,{ 'headers': headers});
  }

  getProyectos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'proyectos',{ 'headers': headers});
  }

  getProyectoId(Id:string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'proyecto/'+Id,{ 'headers': headers});
  }
}
