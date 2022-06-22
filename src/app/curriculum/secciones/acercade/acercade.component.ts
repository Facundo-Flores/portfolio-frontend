import { Component, OnInit } from '@angular/core';
import {Persona, PersonaResponse} from "../../../common/interfaces/curriculum.interface";
import {CurriculumService} from "../../../common/services/curriculum.service";

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  infoPersonal: Persona[] = [];
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.getInfoPersonal()
  }

  getInfoPersonal() {
    this.curriculumService.getAllInfo<PersonaResponse>('persona')
      .subscribe(resp => {
        this.infoPersonal = resp.personas
        console.log(resp)
      })
  }
}
