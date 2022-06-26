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
  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  isMobile = this.width < 481;

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
