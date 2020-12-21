import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  test:any[] =[];

  cargando = true;
  productos:Producto[] = [];
  productosFiltrados:Producto[] = [];

   constructor( private http: HttpClient) {

    this.CargarProductos();

}

private CargarProductos(){


  return new Promise ( (  resolve, reject)=>{

    this.http.get('https://angurlar-html-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:Producto[])=>{

      this.productos = resp;

      this.cargando = false;



    })

  })

};
getProducto(id:string){
  console.log(id);
   return this.http.get( `https://angurlar-html-default-rtdb.firebaseio.com/productos/${ id }.json `);
}


SearchProduct(termino:string){

  if(this.productos.length == 0 ){
    //cargar
    this.CargarProductos().then(() =>{
      // cuando carguen
      this.FiltrarProductos(termino);

    })

  }else{
    this.FiltrarProductos(termino);
  }
}


FiltrarProductos(termino:string){
this.productosFiltrados = [];

termino = termino.toLocaleLowerCase();


  this.productos.forEach( prod => {
    const tituloP = prod.titulo.toLocaleLowerCase();
    if(prod.categoria.indexOf(termino) >=0 || tituloP.indexOf(termino) >=0  ){
this.productosFiltrados.push(prod);

console.log(this.productosFiltrados);
    }
  })

}

}
