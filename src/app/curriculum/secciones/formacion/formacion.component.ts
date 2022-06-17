import { Component, OnInit } from '@angular/core';
import {Curso, CursoResponse, Educacion, EducacionResponse} from "../../../common/interfaces/curriculum.interface";
import {CurriculumService} from "../../../services/curriculum.service";

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  listaFormacion: Educacion[] = [];
  listaCursos: Curso[] = [];

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getListaFormacion();
    this.getListaCursos()
  }

  getListaFormacion() {
    this.curriculumService.getAllInfo<EducacionResponse>('educacion')
      .subscribe(resp => {
        this.procesarResponseEducacion(resp);
      })
  }

  getListaCursos() {
    this.curriculumService.getAllInfo<CursoResponse>('curso')
      .subscribe(resp => {
        this.procesarResponseCurso(resp)
      })
  }

  procesarResponseEducacion(resp: EducacionResponse): Educacion[] {
    let listaEducacion = resp.educacionList
    listaEducacion.forEach((item: Educacion) => {
      if (item.logo != null)
        item.logo = 'data:image/jpeg;base64,' + item.logo
      this.listaFormacion.push(item)
    })
    return this.listaFormacion
  }

  procesarResponseCurso(resp: CursoResponse): Curso[] {
    let listaCursos = resp.cursos
    listaCursos.forEach((item: Curso) => {
      if (item.logo != null)
        item.logo = 'data:image/jpeg;base64,' + item.logo
      this.listaCursos.push(item)
    })
    return this.listaCursos
  }
}
