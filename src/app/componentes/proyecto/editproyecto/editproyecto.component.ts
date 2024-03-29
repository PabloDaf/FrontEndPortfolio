import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenproyectoService } from 'src/app/service/imagenproyecto.service';
import { ProyectoService } from 'src/app/service/proyecto.service';


@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.scss']
})
export class EditproyectoComponent implements OnInit {
  proyecto:Proyecto = null;
  ImagenproyectoService: any;
  constructor(
  public proyectoS: ProyectoService,
  private activatedRouter : ActivatedRoute,
  private router: Router,
  public imagenproyectoService: ImagenproyectoService)
 { }
    
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imagenproyectoService.url
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
}
uploadImage($event: any){
   const id = this.activatedRouter.snapshot.params['id'];
   const name = "proyecto_" + id;
   this.imagenproyectoService.uploadImage($event, id)
    
  }
}
