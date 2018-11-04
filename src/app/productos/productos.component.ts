import { Component, OnInit } from '@angular/core';

import { Producto } from '../compartido/producto';
import { PRODUCTOS } from '../compartido/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit {
vProductos: Producto[] = PRODUCTOS;

productoSeleccionado = this.vProductos[0];

  constructor() { }

  ngOnInit() {
  }

  onSeleccionado(elemento: Producto) {
    this.productoSeleccionado = elemento;
    console.log(this.productoSeleccionado);
    this.productoSeleccionado.comentarios = elemento.comentarios;
  }
}
