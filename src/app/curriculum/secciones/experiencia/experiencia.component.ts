import { Component, OnInit } from '@angular/core';
import {Experiencia, ExperienciaResponse} from "../../../common/interfaces/curriculum.interface";
import {CurriculumService} from "../../../common/services/curriculum.service";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencias: Experiencia[] = [];
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getExperiencias()
  }

  getExperiencias() {
    this.curriculumService.getAllInfo<ExperienciaResponse>('experiencia')
      .subscribe(resp => {
        this.procesarExperienciaResponse(resp)
      })
  }

  procesarExperienciaResponse(resp: ExperienciaResponse): Experiencia[] {
    let listaExperiencia = resp.experiencia
    listaExperiencia.forEach((item: Experiencia) => {
      if (item.logo != null)
        item.logo = 'data:image/jpeg;base64,' + item.logo
      this.listaExperiencias.push(item)
    })
    return this.listaExperiencias
  }
}
