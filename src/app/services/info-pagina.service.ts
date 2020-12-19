import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info.interfaces';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;

  constructor( private http: HttpClient) {

    this.http.get('/assets/data/info.json')
      .subscribe( (resp:InfoPage) => {

        this.cargada = true;
        this.info = resp;

      })

  }
}
