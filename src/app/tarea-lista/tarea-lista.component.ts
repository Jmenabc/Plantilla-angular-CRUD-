import { Component } from '@angular/core';
import { TareaService } from '../shared/tarea.service';
import { Observable } from 'rxjs';
import { TareaModel } from '../shared/tarea.model';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css']
})
export class TareaListaComponent {

  constructor(private tService: TareaService) { }
  //Collecion y datos necesarios de firebase
  coleccion = "Tareas";
  tareasList: any[] = [];
  documentId: string = '';



  //Metodo para recoger todas las tareas

  getTodaslasTareas() {
    this.tService.cogerTodos(this.coleccion).subscribe(
      (resp: any) => {
        this.tareasList = [];
        resp.forEach((porterosSnapshot: any) => {
          this.tareasList.push(
            {
              documentId: porterosSnapshot.payload.doc.id,
              data: porterosSnapshot.payload.doc.data()
            }
          )
        });
      })
  }


  ngOnInit() {
    this.getTodaslasTareas();
  }
}
