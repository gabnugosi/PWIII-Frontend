import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutorComponent } from './lista-autor/lista-autor.component';
import { NovoAutorComponent } from './novo-autor/novo-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutorComponent,
    NovoAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
