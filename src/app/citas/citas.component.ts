import { Component } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { CitasService } from '../servicios/citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css',
})
export class CitasComponent {
  citas: any;
  id_citas: any;
  obj_citas = {
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
    private scitas: CitasService,
    private susuarios: UsuariosService
  ) {}
  ngOnInit(): void {
    this.consulta();
    this.guardar();
  }

  consulta() {
    this.scitas.consultar().subscribe((resultado: any) => {
      this.citas = resultado;
    });
  }

  mostrar_form(dato: any) {
    switch (dato) {
      case 'ver':
        this.mform = true;
        break;
      case 'no ver':
        this.mform = false;
        break;
    }
  }

  limpiar() {
    this.obj_citas = {
      fecha: '',
      hora: '',
      nota: '',
    };
  }

  validar(funcion: any) {
    if (this.obj_citas.fecha == '') {
      this.validar_fecha = false;
    } else {
      this.validar_fecha = true;
    }

    if (this.obj_citas.hora == '') {
      this.validar_hora = false;
    } else {
      this.validar_hora = true;
    }

    if (this.obj_citas.nota == '') {
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
    this.scitas.insertar(this.obj_citas).subscribe((datos: any) => {
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
      title: '¿Esta seguro de eliminar esta cita?',
      text: '¡La cita no se podra recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        ////////
        this.scitas.eliminar(id).subscribe((datos: any) => {
          if (datos['resultado'] == 'OK') {
            this.consulta();
          }
        });
        ////////
        Swal.fire({
          title: '¡Eliminada!',
          text: 'La cita ha sido eliminada.',
          icon: 'success',
        });
      }
    });
  }
  cargar_datos(items: any, id: number) {
    this.obj_citas = {
      fecha: items.fecha,
      hora: items.hora,
      nota: items.nota,
    };
    this.id_citas = id;
    this.botones_form = true;
    this.mostrar_form('ver');
  }

  editar() {
    this.scitas
      .editar(this.id_citas, this.obj_citas)
      .subscribe((datos: any) => {
        if (datos['resultado'] == 'OK') {
          this.consulta();
        }
      });
    this.limpiar();
    this.mostrar_form('no ver');
  }
}
