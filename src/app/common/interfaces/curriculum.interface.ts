export interface Metadatum {
  Tipo:   string;
  Codigo: string;
  Data:   string;
}

/** Persona **/
export interface PersonaResponse {
  metadata: Metadatum[];
  personas:  Persona[];
}

export interface Persona {
  id?:            number;
  nombre:         string;
  apellido:       string;
  titulo:         string;
  perfil:         string;
  trabajo_actual: string;
}

/**  Experiencia **/
export interface ExperienciaResponse {
  metadata:    Metadatum[];
  experiencias: Experiencia[];
}

export interface Experiencia {
  id?:           number;
  puesto:        string;
  empresa:       string;
  descripcion:   string;
  fecha_inicio:  Date;
  fecha_fin?:    Date;
  logo?:         string;
  persona?:      Persona;
}

/** Educación **/
export interface EducacionResponse {
  metadata:      Metadatum[];
  educacionList: Educacion[];
}

export interface Educacion {
  id?:           number;
  titulo:        string;
  institucion:   string;
  fecha_inicio?: Date;
  fecha_fin?:    Date;
  logo?:         string;
  persona?:      Persona;
}

/** Curso **/
export interface CursoResponse {
  metadata: Metadatum[];
  cursos:   Curso[];
}

export interface Curso {
  id?:            number;
  nombre:        string;
  institucion:   string;
  carga_horaria: string;
  periodo?:       Date;
  logo?:          string;
  persona?:       Persona;
}

/** Habilidad **/
export interface HabilidadResponse {
  metadata:    Metadatum[];
  habilidades: Habilidad[];
}

export interface Habilidad {
  id?:          number;
  nombre:      string;
  descripcion: string;
  nivel:       string;
  persona?:     Persona;
}

/** Proyecto **/
export interface ProyectoResponse {
  metadata:  Metadatum[];
  proyectos: Proyecto[];
}

export interface Proyecto {
  id?:          number;
  nombre:       string;
  descripcion:  string;
  url?:         string;
  img?:         string;
  persona?:     Persona;
}
