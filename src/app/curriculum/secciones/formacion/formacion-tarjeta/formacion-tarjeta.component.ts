import {Component, Input } from '@angular/core';
import {Educacion} from "../../../../common/interfaces/curriculum.interface";
import {MatDialog} from "@angular/material/dialog";
import {AgregarFormacionComponent} from "../agregar-formacion/agregar-formacion.component";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-formacion-tarjeta',
  templateUrl: './formacion-tarjeta.component.html',
  styleUrls: ['./formacion-tarjeta.component.css']
})
export class FormacionTarjetaComponent {

  @Input() educacion!: Educacion
  constructor(public dialog: MatDialog,
              public auth: AuthService) { }

  editar(id: number | undefined, titulo: string, institucion: string, fecha_inicio: Date | undefined, fecha_fin?: Date, logo?: any) {
    const dialogRef = this.dialog.open(AgregarFormacionComponent, {
      width: '600px',
      data: {id: id, titulo: titulo, institucion: institucion, fecha_inicio: fecha_inicio, fecha_fin: fecha_fin, logo: logo}
    })
    dialogRef.afterClosed().subscribe()
  }
}
