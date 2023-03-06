import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.scss']
})
export class EditHabilidadComponent implements OnInit {
habilidad: Habilidad = null;

  constructor( private habilidadS: HabilidadService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadS.detail(id).subscribe(
      data=>{
      this.habilidad = data;
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadS.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
