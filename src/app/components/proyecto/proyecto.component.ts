import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../_model/proyecto';
import { ProyectoService } from '../../_service/proyecto.service';
import { UploadService } from '../../_service/upload.service';
import { Global } from '../../_service/global';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  providers: [ProyectoService, UploadService]
})
export class ProyectoComponent implements OnInit {

  public title: string;
  public proyecto: Proyecto;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project;

  constructor( private servProyecto: ProyectoService,
               private uploadService: UploadService ) { 
    this.title = "crear proyecto";
    this.proyecto = new Proyecto('','','','','',0,''); 
  }

  ngOnInit() {
  }

  onSubmit(form){
    /***Guardar los datos */
    this.servProyecto.save(this.proyecto).subscribe(
      respose =>{
        if(respose.proyecto){
          /**Subir la imagen */
          this.uploadService.makeFileRequest(Global.url+"proyecto/img/"+respose.proyecto._id,[],this.filesToUpload, 'imagen' )
              .then((result:any)=>{
                this.save_project = result;
                this.status = 'suscess';
                form.reset();
                console.log("Succes:"+result);
          });
        }else{
          this.status = 'failed';
          console.log("Error:"+respose);
        }
      },
      error =>{
        this.status = 'failed';
        console.log(<any>error);
      }
      
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }  
}
