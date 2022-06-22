import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CurriculumService} from "../../../../common/services/curriculum.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmarComponent} from "../../../../common/confirmar/confirmar.component";

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent {

  public experienciaForm: FormGroup;
  archivoSeleccionado?: any;

  constructor(private fb: FormBuilder,
              private curriculumService: CurriculumService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AgregarExperienciaComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {

    this.experienciaForm = this.fb.group({
      puesto: ['', Validators.required],
      descripcion: ['', Validators.required],
      empresa: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: '',
      logo: ''
    })
    if (data) {
      this.updateForm(data);
      console.log(data)
    }
  }

  guardarExperiencia() {
    let data = {
      puesto: this.experienciaForm.get('puesto')?.value,
      descripcion: this.experienciaForm.get('descripcion')?.value,
      empresa: this.experienciaForm.get('empresa')?.value,
      fecha_inicio: this.experienciaForm.get('fecha_inicio')?.value,
      fecha_fin: this.experienciaForm.get('fecha_fin')?.value,
      logo: this.archivoSeleccionado,
    }


    const dataUpload = new FormData();
    dataUpload.append('puesto', data.puesto);
    dataUpload.append('descripcion', data.descripcion);
    dataUpload.append('empresa', data.empresa);
    dataUpload.append('fecha_inicio', data.fecha_inicio);
    dataUpload.append('fecha_fin', data.fecha_fin);
    dataUpload.append('logo', data.logo);

    if (this.data != null) {
      this.curriculumService.editarInfo(this.data.id, dataUpload, 'experiencia')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se actualizó correctamente el ítem')
        })
    } else {
      this.curriculumService.crearInfo(dataUpload, 'experiencia')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se creó correctamente el ítem');
        })

    }
  }

  borrarExperiencia() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.experienciaForm
    })
    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.curriculumService.borrarInfo(this.data.id, 'experiencia')
            .subscribe(() => {
              this.dialogRef.close()
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.onSameUrlNavigation = 'reload'
              this.router.navigate(['principal'])
              this.mostrarSnackbar('Se eliminó correctamente el ítem');
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

  updateForm(data: any) {
    if (data.fecha_fin == null)
      data.fecha_fin = ''
    this.experienciaForm = this.fb.group({
      puesto: [data.puesto, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      empresa: [data.empresa, Validators.required],
      fecha_inicio: [data.fecha_inicio, Validators.required],
      fecha_fin: data.fecha_fin,
      logo: ''
    })
  }

}
