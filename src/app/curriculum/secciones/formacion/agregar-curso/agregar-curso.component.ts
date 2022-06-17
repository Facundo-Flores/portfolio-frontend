import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CurriculumService} from "../../../../common/services/curriculum.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmarComponent} from "../../../../common/confirmar/confirmar.component";

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent {

  public cursoForm: FormGroup;
  private archivoSeleccionado?: any;

  constructor(private fb: FormBuilder,
              private curriculumService: CurriculumService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AgregarCursoComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      institucion: ['', Validators.required],
      carga_horaria: ['', Validators.required],
      periodo: ['', Validators.required],
      logo: ''
    })
    if (data)
      this.editarCursoForm(data)
  }

  guardarCurso() {
    let data = {
      nombre: this.cursoForm.get('nombre')?.value,
      institucion: this.cursoForm.get('institucion')?.value,
      carga_horaria: this.cursoForm.get('carga_horaria')?.value,
      periodo: this.cursoForm.get('periodo')?.value,
      logo: this.archivoSeleccionado
    }

    const dataUpload = new FormData();
    dataUpload.append('nombre', data.nombre);
    dataUpload.append('institucion', data.institucion);
    dataUpload.append('carga_horaria', data.carga_horaria);
    dataUpload.append('periodo', data.periodo);
    dataUpload.append('logo', data.logo);

    if (this.data != null) {
      this.curriculumService.editarInfo(this.data.id, dataUpload,'curso')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se actualizó correctamente el item')
        })
    } else {
      this.curriculumService.crearInfo(dataUpload, 'curso')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se actualizó correctamente el item')
        })
    }
  }

  borrarCurso() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.cursoForm
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.curriculumService.borrarInfo(this.data.id, 'curso')
            .subscribe(() => {
              this.dialogRef.close()
              this.router.routeReuseStrategy.shouldReuseRoute = () => false
              this.router.onSameUrlNavigation = 'reload'
              this.router.navigate(['principal'])
              this.mostrarSnackbar('Se eliminó correctamente el ítem')
            })
        }
      }
    )
  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', { duration: 2500})
  }

  onFileChanged($event: any) {
    this.archivoSeleccionado = $event.target.files[0];
  }

  editarCursoForm(data: any) {
    this.cursoForm = this.fb.group({
      nombre: [data.nombre, Validators.required],
      institucion: [data.institucion, Validators.required],
      carga_horaria: [data.carga_horaria, Validators.required],
      periodo: [data.periodo, Validators.required],
      logo: this.archivoSeleccionado
    })
  }

}
