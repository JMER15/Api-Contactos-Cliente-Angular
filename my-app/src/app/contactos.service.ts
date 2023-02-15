import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contacto } from '../models/Contacto';
// import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class ContactosService {
  baseUrl: any;
  // baseUrl = environment.baseUrl
  // private handleError: HandleError;

  constructor(
    private http: HttpClient,
  ) {

  }

  /** GET heroes from the server */
  getContactos(): Observable<Contacto[]> {

    return this.http.get<Contacto[]>('http://contacto.local/contactos')
    // .pipe(
    //   catchError(this.handleError('getContactos', []))
    // );
  }

  addContacto(contacto: Contacto) {
    return this.http.post('http://contacto.local/contactos', contacto);
  }

  deleteContacto(id: any) {

    return this.http.delete('http://contacto.local/contactos/' + id);
  }

  getContacto(id: any): Observable<any> {

    return this.http.get<Contacto>('http://contacto.local/contactos/' + id);
    // .pipe(
    //   catchError(this.handleError('getContacto', []))
    // );
  }

  updateContacto(contacto: Contacto) {
    return this.http.put('http://contacto.local/contactos/' + contacto.id, contacto);
  }

}
