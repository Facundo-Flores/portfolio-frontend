import {Component, Input} from '@angular/core';
import {Persona} from "../../../../common/interfaces/curriculum.interface";

@Component({
  selector: 'app-acercade-tarjeta',
  templateUrl: './acercade-tarjeta.component.html',
  styleUrls: ['./acercade-tarjeta.component.css']
})
export class AcercadeTarjetaComponent {

  @Input() infoPersonal!: Persona

}
