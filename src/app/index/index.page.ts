import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAgregar() {
    this.router.navigate(['/agregar']);
  }
  navigateToActualizar() {
    this.router.navigate(['/actualizar']);
  }
  navigateToEliminar() {
    this.router.navigate(['/eliminar']);
  }
  navigateToInventario() {
    this.router.navigate(['/inventario']);
  }


}