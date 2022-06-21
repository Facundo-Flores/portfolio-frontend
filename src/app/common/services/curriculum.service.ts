import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experiencia} from "../interfaces/curriculum.interface";

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  private rutaBase: string = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }


  // Acá ponemos métodos HTTP genéricos, estilo factory method.
  // Cada sección del curriculum los puede utilizar pasando los parámetros que le correspondan
  // Por ejemplo: editar información de un curso sería
  // editarInfo<Curso>(id: number, info: any, ruta: string): Observable<Curso> {
  //  return this.http.put<Curso>(`${this.rutaBase}/curso/1`, info) }

  getAllInfo<T>(ruta: string): Observable<T> {
    return this.http.get<T>(`${this.rutaBase}/${ruta}`);
  }

  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.rutaBase}/experiencia`)
  }

  getInfoPorId<T>(id: number, ruta: string): Observable<T> {
    return this.http.get<T>(`${this.rutaBase}/${ruta}/${id}`);
  }

  crearInfo<T>(info: any, ruta: string): Observable<T> {
    return this.http.post<T>(`${this.rutaBase}/${ruta}`, info);
  }

  editarInfo<T>(id: number, info: any, ruta: string): Observable<T> {
    return this.http.put<T>(`${this.rutaBase}/${ruta}/${id}`, info);
  }

  borrarInfo(id: number, ruta: string): Observable<any> {
    return this.http.delete<any>(`${this.rutaBase}/${ruta}/${id}`);
  }

}
