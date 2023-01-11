import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EdiTareaComponent } from './edi-tarea/edi-tarea.component';

const routes: Routes = [
  { path: "tareas", component: TareaListaComponent },
  { path: "tareas/:idTarea/edit", component: EdiTareaComponent },
  { path: "tareas/new", component: EdiTareaComponent },
  { path: "**", redirectTo: "/tareas", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
