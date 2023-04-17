import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './componentes/acercade/editacercade/editacercade.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad/edit-habilidad.component';
import { NewHabilidadComponent } from './componentes/habilidades/new-habilidad/new-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectoComponent } from './componentes/proyecto/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyecto/newproyecto/newproyecto.component';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'login', component:LoginComponent},
 {path:'nuevaexp', component: NewExperienciaComponent},
 {path:'editexp/:id', component: EditExperienciaComponent},
 {path:'nuevaedu', component: NeweducacionComponent},
 {path:'editedu/:id', component: EditeducacionComponent},
 {path:'edithabilidad/:id', component: EditHabilidadComponent},
 {path:'newhabilidad', component: NewHabilidadComponent},
 {path:'editacercade/:id', component: EditacercadeComponent},
 {path:'nuevopro', component: NewproyectoComponent},
 {path:'editpro/:id', component: EditproyectoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
