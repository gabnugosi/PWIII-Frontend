import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAutorComponent } from './lista-autor/lista-autor.component';
import { NovoAutorComponent } from './novo-autor/novo-autor.component';

const routes: Routes = [
  {path: 'listagem', component: ListaAutorComponent},
  {path: 'novo', component: NovoAutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
