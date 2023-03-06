import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Habilidad[]=[];

  constructor( private habilidadS: HabilidadService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
  }
}
   cargarHabilidades(): void{
    this.habilidadS.lista().subscribe(data => {
      this.habilidad = data;
    })
   }

   delete(id:number){
    if(id !== undefined){
      this.habilidadS.delete(id).subscribe(data => {
        this.cargarHabilidades();
      }, err => {
        alert(" No es posible borrar la habilidad");
      }
      )
    }
   }

}
