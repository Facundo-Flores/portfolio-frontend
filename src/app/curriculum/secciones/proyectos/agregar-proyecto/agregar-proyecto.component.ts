import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Proyecto} from "../../../../common/interfaces/curriculum.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmarComponent} from "../../../../common/confirmar/confirmar.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CurriculumService} from "../../../../common/services/curriculum.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent {

  public proyectoForm: FormGroup;
  private archivoSeleccionado?: any;

  constructor(private fb: FormBuilder,
              private curriculumService: CurriculumService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AgregarProyectoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {

    this.proyectoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: '',
      img: '',
    })
    if (data)
      this.editarProyectoForm(data)
  }

  guardarProyecto() {
    let data = {
      nombre: this.proyectoForm.get('nombre')?.value,
      descripcion: this.proyectoForm.get('descripcion')?.value,
      url: this.proyectoForm.get('url')?.value,
      img: this.archivoSeleccionado
    }

    const dataUpload = new FormData();
    dataUpload.append('nombre', data.nombre);
    dataUpload.append('descripcion', data.descripcion);
    dataUpload.append('url', data.url);
    dataUpload.append('img', data.img);

    if (this.data != null) {
      this.curriculumService.editarInfo(this.data.id, dataUpload, 'proyecto')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se actualizó correctamente el item')
        })
    } else {
      this.curriculumService.crearInfo(dataUpload, 'proyecto')
        .subscribe(() => {
          this.dialogRef.close()
          this.router.routeReuseStrategy.shouldReuseRoute = () => false
          //this.router.onSameUrlNavigation = 'reload'
          this.router.navigate(['principal'])
          this.mostrarSnackbar('Se creó correctamente el item')
        })
    }
  }

  borrarProyecto() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.proyectoForm
    })
    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.curriculumService.borrarInfo(this.data.id, 'proyecto')
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

  editarProyectoForm(data: Proyecto) {
    this.proyectoForm = this.fb.group({
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      url: data.url,
      img: '',
    })
  }
}
