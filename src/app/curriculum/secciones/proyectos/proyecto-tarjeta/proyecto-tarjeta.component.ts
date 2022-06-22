import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AgregarProyectoComponent} from "../agregar-proyecto/agregar-proyecto.component";
import {Proyecto} from "../../../../common/interfaces/curriculum.interface";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-proyecto-tarjeta',
  templateUrl: './proyecto-tarjeta.component.html',
  styleUrls: ['./proyecto-tarjeta.component.css']
})
export class ProyectoTarjetaComponent {

  @Input() proyecto!: Proyecto;
  constructor(public dialog: MatDialog,
              public auth: AuthService) { }

  editar(id: number | undefined, nombre: string, descripcion: string, url: string | undefined, img?: any) {
    const dialogRef = this.dialog.open(AgregarProyectoComponent, {
      width: '600px',
      data: {id: id, nombre: nombre, descripcion: descripcion, url: url, img: img}
    })
    dialogRef.afterClosed().subscribe()
  }
}
