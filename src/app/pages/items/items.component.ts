import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoAll } from '../../interfaces/productAll.interface';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  producto :  productoAll ;
  productoid:string;
  constructor( private router:ActivatedRoute, private productService:ProductosService) { }

  ngOnInit(): void {

    this.router.params
    .subscribe( parametros =>{


      this.productService.getProducto(parametros['id'])
      .subscribe( (p:productoAll) =>{

        this.productoid = parametros['id'];

        this.producto = p;

        console.log(p);

      })

    })
  }

}
