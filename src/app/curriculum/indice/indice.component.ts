import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {AgregarExperienciaComponent} from "../secciones/experiencia/agregar-experiencia/agregar-experiencia.component";
import {AgregarCursoComponent} from "../secciones/formacion/agregar-curso/agregar-curso.component";
import {AgregarHabilidadComponent} from "../secciones/habilidades/agregar-habilidad/agregar-habilidad.component";
import {AgregarProyectoComponent} from "../secciones/proyectos/agregar-proyecto/agregar-proyecto.component";
import {AgregarFormacionComponent} from "../secciones/formacion/agregar-formacion/agregar-formacion.component";

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private router: Router,
              ) { }

  ngOnInit(): void {
  }

  abrirDialogExperiencia() {
    const dialogRef = this.dialog.open(AgregarExperienciaComponent, {
      width: '600px',
      data: null
    })
  }

  abrirDialogFormacion() {
    const dialogRef = this.dialog.open(AgregarFormacionComponent, {
      width: '600px',
      data: null
    })
  }

  abrirDialogCurso() {
    const dialogRef = this.dialog.open(AgregarCursoComponent, {
      width: '600px',
      data: null
    })
  }

  abrirDialogHabilidad() {
    const dialogRef = this.dialog.open(AgregarHabilidadComponent, {
      width: '600px',
      data: null
    })
  }

  abrirDialogProyecto() {
    const dialogRef = this.dialog.open(AgregarProyectoComponent, {
      width: '600px',
      data: null
    })
  }

}
