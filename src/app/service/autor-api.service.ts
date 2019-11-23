import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { throwError, Observable } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { Autor } from '../autor';


@Injectable({
  providedIn: 'root'

})
export class AutorAPIService {
  apiURL: string = "http://localhost:8080/api/autores";
  constructor(private httpClient: HttpClient) { }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAutores(): Observable<Autor[]> {
    return this.httpClient.get<Autor[]>(this.apiURL)
      .pipe(retry(1),
        catchError(this.handleError));
  }
  createAutor(aut: Autor): Observable<Autor> {
    return this.httpClient.post<Autor>(`${this.apiURL}`, aut)
    .pipe(retry(1),
    catchError(this.handleError));
    }
}
