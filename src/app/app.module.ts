//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { InicioSeccionComponent } from './inicio-seccion/inicio-seccion.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { NotasComponent } from './notas/notas.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  declarations: [AppComponent, NavegadorComponent, ListaTareasComponent, AgregarTareaComponent, InicioSeccionComponent, TarjetaComponent, NotasComponent, AlertaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
