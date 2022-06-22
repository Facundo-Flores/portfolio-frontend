import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndiceComponent} from "./indice/indice.component";
import {ContenedorComponent} from "./contenedor/contenedor.component";

const routes: Routes = [
  {
    path: '',
    component: IndiceComponent,
    children: [
      { path: 'curriculum', component: ContenedorComponent },
      { path: '**', redirectTo: 'curriculum' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
