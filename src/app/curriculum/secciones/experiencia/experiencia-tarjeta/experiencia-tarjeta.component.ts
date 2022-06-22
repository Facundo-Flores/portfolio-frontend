import {Component, Input } from '@angular/core';
import {Experiencia} from "../../../../common/interfaces/curriculum.interface";
import {MatDialog} from "@angular/material/dialog";
import {AgregarExperienciaComponent} from "../agregar-experiencia/agregar-experiencia.component";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-experiencia-tarjeta',
  templateUrl: './experiencia-tarjeta.component.html',
  styleUrls: ['./experiencia-tarjeta.component.css']
})
export class ExperienciaTarjetaComponent {

  @Input() experiencia!: Experiencia
  constructor(public dialog: MatDialog,
              public auth: AuthService) { }

  editar(id: number | undefined, puesto: string, descripcion: string, empresa: string, fecha_inicio: Date | undefined, fecha_fin?: Date, logo?: any) {
    const dialogRef = this.dialog.open(AgregarExperienciaComponent, {
      width: '600px',
      data: {id: id, puesto: puesto, empresa: empresa, descripcion: descripcion, fecha_inicio: fecha_inicio, fecha_fin: fecha_fin, logo: logo }
    })
    dialogRef.afterClosed().subscribe()
  }
}
