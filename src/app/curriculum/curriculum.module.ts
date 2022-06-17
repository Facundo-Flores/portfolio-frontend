import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";

import { CurriculumRoutingModule } from "./curriculum-routing.module";

import { AcercadeComponent } from './secciones/acercade/acercade.component';
import { ExperienciaComponent } from './secciones/experiencia/experiencia.component';
import { HabilidadesComponent } from './secciones/habilidades/habilidades.component';
import { ProyectosComponent } from './secciones/proyectos/proyectos.component';
import { FormacionComponent } from './secciones/formacion/formacion.component';
import { IndiceComponent } from './indice/indice.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { AcercadeTarjetaComponent } from './secciones/acercade/acercade-tarjeta/acercade-tarjeta.component';
import { AgregarAcercadeComponent } from './secciones/acercade/agregar-acercade/agregar-acercade.component';
import { ExperienciaTarjetaComponent } from './secciones/experiencia/experiencia-tarjeta/experiencia-tarjeta.component';
import { AgregarExperienciaComponent } from './secciones/experiencia/agregar-experiencia/agregar-experiencia.component';
import { ProyectoTarjetaComponent } from './secciones/proyectos/proyecto-tarjeta/proyecto-tarjeta.component';
import { AgregarProyectoComponent } from './secciones/proyectos/agregar-proyecto/agregar-proyecto.component';
import { HabilidadTarjetaComponent } from './secciones/habilidades/habilidad-tarjeta/habilidad-tarjeta.component';
import { AgregarHabilidadComponent } from './secciones/habilidades/agregar-habilidad/agregar-habilidad.component';
import { FormacionTarjetaComponent } from './secciones/formacion/formacion-tarjeta/formacion-tarjeta.component';
import { AgregarFormacionComponent } from './secciones/formacion/agregar-formacion/agregar-formacion.component';
import { AgregarCursoComponent } from './secciones/formacion/agregar-curso/agregar-curso.component';
import { CursoTarjetaComponent } from './secciones/formacion/curso-tarjeta/curso-tarjeta.component';
import {MaterialModule} from "../material/material.module";




@NgModule({
  declarations: [
    AcercadeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FormacionComponent,
    IndiceComponent,
    ContenedorComponent,
    AcercadeTarjetaComponent,
    AgregarAcercadeComponent,
    ExperienciaTarjetaComponent,
    AgregarExperienciaComponent,
    ProyectoTarjetaComponent,
    AgregarProyectoComponent,
    HabilidadTarjetaComponent,
    AgregarHabilidadComponent,
    FormacionTarjetaComponent,
    AgregarFormacionComponent,
    AgregarCursoComponent,
    CursoTarjetaComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class CurriculumModule { }
