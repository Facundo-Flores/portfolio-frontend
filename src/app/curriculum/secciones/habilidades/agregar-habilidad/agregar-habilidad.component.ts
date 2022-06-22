import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Habilidad} from "../../../../common/interfaces/curriculum.interface";
import {ConfirmarComponent} from "../../../../common/confirmar/confirmar.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CurriculumService} from "../../../../common/services/curriculum.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent {

  public habilidadForm: FormGroup;

  constructor(private fb: FormBuilder,
              private curriculumService: CurriculumService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AgregarHabilidadComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {

    this.habilidadForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      nivel: ['', Validators.required]
    })
    if (data)
      this.editarHabilidadForm(data)
  }

  guardarHabilidad() {
    let data = {
      nombre: this.habilidadForm.get('nombre')?.value,
      descripcion: this.habilidadForm.get('descripcion')?.value,
      nivel: this.habilidadForm.get('nivel')?.value,
    }

    const dataUpload = new FormData();
    dataUpload.append('nombre', data.nombre)
    dataUpload.append('descripcion', data.descripcion)
    dataUpload.append('nivel', data.nivel)

    if (this.data != null) {
      this.curriculumService.editarInfo(this.data.id, dataUpload, 'habilidad')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se actualizó correctamente el ítem')
          console.log(typeof dataUpload.get('fecha_fin'))
        })
    } else {
      this.curriculumService.crearInfo(dataUpload, 'habilidad')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se creó correctamente el ítem');
        })
    }
  }

  borrarHabilidad() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.habilidadForm
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.curriculumService.borrarInfo(this.data.id, 'habilidad')
            .subscribe(() => {
              this.dialogRef.close()
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.onSameUrlNavigation = 'reload'
              this.router.navigate(['principal'])
              this.mostrarSnackbar("Se eliminó correctamente el registro.")
            })
        }
      }
    )
  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', { duration: 4500})
  }

  editarHabilidadForm(data: Habilidad) {
    this.habilidadForm = this.fb.group({
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      nivel: [data.nivel, Validators.required]
    })
  }
}
