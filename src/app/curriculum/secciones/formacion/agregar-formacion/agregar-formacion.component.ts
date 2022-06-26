import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmarComponent} from "../../../../common/confirmar/confirmar.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CurriculumService} from "../../../../common/services/curriculum.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-agregar-formacion',
  templateUrl: './agregar-formacion.component.html',
  styleUrls: ['./agregar-formacion.component.css']
})
export class AgregarFormacionComponent {

  public educacionForm: FormGroup;
  private archivoSeleccionado?: any;

  constructor(private fb: FormBuilder,
              private curriculumService: CurriculumService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AgregarFormacionComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {

    this.educacionForm = this.fb.group({
      titulo: ['', Validators.required],
      institucion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: '',
      logo: ''
    })
    if (data)
      this.editarEducacionForm(data)
  }

  guardarEducacion() {
    let data = {
      titulo: this.educacionForm.get('titulo')?.value,
      institucion: this.educacionForm.get('institucion')?.value,
      fecha_inicio: this.educacionForm.get('fecha_inicio')?.value,
      fecha_fin: this.educacionForm.get('fecha_fin')?.value,
      logo: this.archivoSeleccionado
    }
    console.log(data.fecha_fin)
    console.log(typeof data.fecha_fin)

    const dataUpload = new FormData();
    dataUpload.append('titulo', data.titulo);
    dataUpload.append('institucion', data.institucion);
    dataUpload.append('fecha_inicio', data.fecha_inicio);
    dataUpload.append('fecha_fin', data.fecha_fin);
    dataUpload.append('logo', data.logo);

    if (this.data != null) {
      this.curriculumService.editarInfo(this.data.id, dataUpload, 'educacion')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se actualizó correctamente el ítem')
        })
    } else {
      this.curriculumService.crearInfo(dataUpload, 'educacion')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se creó correctamente el ítem')
        })
    }
  }

  borrarEducacion() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.educacionForm
    })
    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.curriculumService.borrarInfo(this.data.id, 'educacion')
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

  editarEducacionForm(data: any) {
    if (data.fecha_fin == null)
      data.fecha_fin = ''
    this.educacionForm = this.fb.group({
      titulo: [data.titulo, Validators.required],
      institucion: [data.institucion, Validators.required],
      fecha_inicio: [data.fecha_inicio, Validators.required],
      fecha_fin: data.fecha_fin,
      logo: ''
    })
    console.log(this.educacionForm)
  }

}
