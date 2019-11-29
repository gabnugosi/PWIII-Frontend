import { Component, OnInit } from '@angular/core';
import { AutorAPIService } from '../service/autor-api.service';
import { Autor } from '../autor';

@Component({
  selector: 'has-lista-autor',
  templateUrl: './lista-autor.component.html',
  styleUrls: ['./lista-autor.component.css']
})
export class ListaAutorComponent implements OnInit {
  autores : Autor[];
  constructor(private service: AutorAPIService) { }

  ngOnInit() {
      this.service
          .getAutores()
          .subscribe((data: Autor[])=>  this.autores = data,
                      error => console.log(error));                  
  }

}
