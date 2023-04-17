import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ImagenproyectoService } from 'src/app/service/imagenproyecto.service';
@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.scss']
})
export class NewproyectoComponent implements OnInit {
  proyecto:Proyecto = null;
  nombreP: string;
fechaP: Date;
descripcionP: string;
imgP: string;
  storage: Storage;
  url: string="";
  name: string;
 

  constructor(private activatedRouter:ActivatedRoute,
    private router: Router,
    public proyectoS:ProyectoService, 
    public imagenproyectoService: ImagenproyectoService ) {
     }

  ngOnInit(): void {  
    
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.fechaP, this.descripcionP, this.imgP);
    proyecto.imgP = this.imagenproyectoService.url;
    this.proyectoS.save(proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
    this.imagenproyectoService.url="";
    }

uploadImage($event: any){
 
  const id = Math.random().toString(36).substring(2);
  const name = "proyect_" + id; 
  const file = $event.target.files[0]
  this.imagenproyectoService.uploadImage($event, name)
   
  }
}