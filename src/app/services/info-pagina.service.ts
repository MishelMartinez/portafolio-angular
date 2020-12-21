import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage, datosPage } from '../interfaces/info.interfaces';




@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;
  equipo:any[] =[];
  constructor( private http: HttpClient) {

    this.cargarInfo();

    this.cargarEquipo();


  }

  private cargarInfo(){

    this.http.get('assets/data/info.json')
    .subscribe( (resp:InfoPage) => {

      this.cargada = true;
      this.info = resp;

    })


  }

  private cargarEquipo(){
    this.http.get('https://angurlar-html-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp:datosPage[]) => {

      this.cargada = true;
      this.equipo = resp;

    })

  }
}

