import { Component } from '@angular/core';
import { NotasService } from '../servicios/notas.service';
import Swal from 'sweetalert2';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css',
})
export class NotasComponent {
  notas: any;
  id_nota: any;
  obj_notas = {
    fecha: '',
    hora: '',
    nota: '',
  };

  validar_fecha = true;
  validar_hora = true;
  validar_nota = true;
  mform = false;
  botones_form = false;

  constructor(
    private snotas: NotasService,
    private susuarios: UsuariosService
  ) {}
  ngOnInit(): void {
    this.consulta();
    this.guardar();
  }

  consulta() {
    this.snotas.consultar().subscribe((resultado: any) => {
      this.notas = resultado;
    });
  }

  mostrar_form(dato: any) {
    switch (dato) {
      case 'ver':
        this.mform = true;
        break;
      case 'no ver':
        this.mform = false;
        this.botones_form = false;
        break;
    }
  }

  limpiar() {
    this.obj_notas = {
      fecha: '',
      hora: '',
      nota: '',
    };
  }

  validar(funcion: any) {
    if (this.obj_notas.fecha == '') {
      this.validar_fecha = false;
    } else {
      this.validar_fecha = true;
    }

    if (this.obj_notas.hora == '') {
      this.validar_hora = false;
    } else {
      this.validar_hora = true;
    }

    if (this.obj_notas.nota == '') {
      this.validar_nota = false;
    } else {
      this.validar_nota = true;
    }

    if (
      this.validar_fecha == true &&
      this.validar_hora &&
      this.validar_nota &&
      funcion == 'guardar'
    ) {
      this.guardar();
    }

    if (
      this.validar_fecha == true &&
      this.validar_hora == true &&
      this.validar_nota == true &&
      funcion == 'editar'
    ) {
      this.editar();
    }
  }

  guardar() {
    this.snotas.insertar(this.obj_notas).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        this.consulta();
      }
    });

    this.limpiar();
    this.mostrar_form('no ver');
  }

  eliminar(id: number) {
    //Alerta con sweetalert

    Swal.fire({
      title: '¿Esta seguro de eliminar esta nota?',
      text: '¡La nota no se podra recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        ////////
        this.snotas.eliminar(id).subscribe((datos: any) => {
          if (datos['resultado'] == 'OK') {
            this.consulta();
          }
        });
        ////////
        Swal.fire({
          title: '¡Eliminada!',
          text: 'La nota ha sido eliminada.',
          icon: 'success',
        });
      }
    });
  }

  cargar_datos(items: any, id: number) {
    this.obj_notas = {
      fecha: items.fecha,
      hora: items.hora,
      nota: items.nota,
    };
    this.id_nota = id;
    this.botones_form = true;
    this.mostrar_form('ver');
  }

  editar() {
    this.snotas.editar(this.id_nota, this.obj_notas).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');
  }
}
