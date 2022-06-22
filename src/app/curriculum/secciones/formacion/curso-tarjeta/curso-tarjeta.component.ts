import {Component, Input } from '@angular/core';
import {Curso} from "../../../../common/interfaces/curriculum.interface";
import {MatDialog} from "@angular/material/dialog";
import {AgregarCursoComponent} from "../agregar-curso/agregar-curso.component";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-curso-tarjeta',
  templateUrl: './curso-tarjeta.component.html',
  styleUrls: ['./curso-tarjeta.component.css']
})
export class CursoTarjetaComponent  {

  @Input() curso!: Curso;
  constructor(public dialog: MatDialog,
              public auth: AuthService) { }

  editar(id: number | undefined, nombre: string, institucion: string, carga_horaria: string, periodo: Date | undefined, logo?: any) {
    const dialogRef = this.dialog.open(AgregarCursoComponent, {
      width: '600px',
      data: {id: id, nombre: nombre, institucion: institucion, carga_horaria: carga_horaria, periodo: periodo, logo: logo}
    })
  }
}
