import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EdiTareaComponent } from './edi-tarea/edi-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    EdiTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
