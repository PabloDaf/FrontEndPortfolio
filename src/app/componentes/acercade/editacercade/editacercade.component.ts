import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.scss']
})
export class EditacercadeComponent implements OnInit {
  persona: Persona = null;
  ImageService: any;
  constructor(private activatedRouter: ActivatedRoute, 
    private personaService: PersonaService, 
    private router:Router, 
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Error al modificar la Persona");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
}
  
  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.ImageService.uploadImage($event, name)
  }
}
