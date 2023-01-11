import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-edi-tarea',
  templateUrl: './edi-tarea.component.html',
  styleUrls: ['./edi-tarea.component.css']
})
export class EdiTareaComponent {
  coleccion = "Tareas";
  documentId: string = '';
  tarea: any;
  constructor(private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private tService: TareaService) { }

    formTareas = this.fb.group({
      id: [],
      titulo: [],
      estado: [],
      fecha: [],
    });

    EditarDatos() {
      this.documentId = this.ruta.snapshot.paramMap.get('idTarea')!;
      this.tService.cogerUno(this.coleccion, this.documentId).subscribe((resp: any) => {
        this.formTareas.setValue(resp.payload.data());
      });
    }

    ActualizarDatos() {
      this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
      this.tService.Actualizar(this.coleccion, this.documentId, this.formTareas.value)
    }


}
