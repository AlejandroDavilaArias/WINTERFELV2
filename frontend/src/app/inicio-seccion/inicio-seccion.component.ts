import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-seccion',
  templateUrl: './inicio-seccion.component.html',
  styleUrl: './inicio-seccion.component.css',
})
export class InicioSeccionComponent {
  email: any;
  clave: any;
  error = false;
  usuario: any;
  user = {
    nombre: '',
    email: '',
    clave: '',
  };

  constructor(private slogin: LoginService, private router: Router) {}

  ngOnInit(): void {}

  consulta(tecla: any) {
    if (tecla == 13 || tecla == '') {
      this.slogin
        .consultar(this.email, this.clave)
        .subscribe((resultado: any) => {
          this.usuario = resultado;
          console.log(this.usuario);

          /*if (this.usuario[0].validar == 'valida') {
            //sessionStorage.setItem('id', this.usuario['id']);
          } else {
            console.log('No entro');
            this.error = true;
          }*/
        });
    }
  }
}
