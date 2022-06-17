import { Component, OnInit } from '@angular/core';
import {Habilidad, HabilidadResponse} from "../../../common/interfaces/curriculum.interface";
import {CurriculumService} from "../../../common/services/curriculum.service";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  listaHabilidades: Habilidad[] = [];
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getHabilidades()
  }

  getHabilidades() {
    this.curriculumService.getAllInfo<HabilidadResponse>('habilidad')
      .subscribe(resp => {
        this.listaHabilidades = resp.habilidades
      })
  }
}
