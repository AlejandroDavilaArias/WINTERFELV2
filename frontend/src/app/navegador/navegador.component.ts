import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css',
})
export class NavegadorComponent {
  nombre: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nombre = sessionStorage.getItem('nombre');
  }

  cerrar() {
    sessionStorage.setItem('id', '');
    sessionStorage.setItem('email', '');
    sessionStorage.setItem('nombre', '');
    this.router.navigate(['login']);
  }
}
