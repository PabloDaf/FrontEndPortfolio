import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.scss']
})
export class NewHabilidadComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private habilidadS: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidad = new Habilidad(this.nombre, this.porcentaje);
    this.habilidadS.save(habilidad).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo al agregar la habilidad");
        this.router.navigate(['']);
      }
    )
      }
    }
