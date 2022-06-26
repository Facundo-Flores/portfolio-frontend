import { Component, OnInit } from '@angular/core';
import {Proyecto, ProyectoResponse} from "../../../common/interfaces/curriculum.interface";
import {CurriculumService} from "../../../common/services/curriculum.service";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listadoProyectos: Proyecto[] = [];
  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  isMobile = this.width < 481;

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getProyectos()
  }

  getProyectos() {
    this.curriculumService.getAllInfo<ProyectoResponse>('proyecto')
      .subscribe(resp => {
        console.log(resp)
        this.procesarProyectoResponse(resp)
      })
  }

  procesarProyectoResponse(resp: ProyectoResponse): Proyecto[] {
    let listaProyectos = resp.proyectos
    listaProyectos.forEach((proyecto: Proyecto) => {
      if (proyecto.img != null)
        proyecto.img = 'data:image/jpeg;base64,'+ proyecto.img;
      this.listadoProyectos.push(proyecto)
    })
    return this.listadoProyectos
  }
}
