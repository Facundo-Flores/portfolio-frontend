import {Component, Input } from '@angular/core';
import {Habilidad} from "../../../../common/interfaces/curriculum.interface";
import {MatDialog} from "@angular/material/dialog";
import {AgregarHabilidadComponent} from "../agregar-habilidad/agregar-habilidad.component";

@Component({
  selector: 'app-habilidad-tarjeta',
  templateUrl: './habilidad-tarjeta.component.html',
  styleUrls: ['./habilidad-tarjeta.component.css']
})
export class HabilidadTarjetaComponent {

  @Input() habilidad!: Habilidad;
  constructor(public dialog: MatDialog) { }

  editar(id: number | undefined, nombre: string, descripcion: string, nivel: string) {
    const dialogRef = this.dialog.open(AgregarHabilidadComponent, {
      width: '600px',
      data: {id: id, nombre: nombre, descripcion: descripcion, nivel: nivel}
    })
    dialogRef.afterClosed().subscribe()
  }

}
