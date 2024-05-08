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
import { PrincipalComponent } from './principal/principal.component';
import { CalendarioComponent } from './principal/calendario/calendario.component';
import { Routes, RouterModule } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { MesesComponent } from './calendario/meses/meses.component';
import { DiasComponent } from './dias/dias.component';
import { RegistroComponent } from './inicio-seccion/registro/registro.component';

const routes: Routes = [
  { path: 'login', component: InicioSeccionComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    ListaTareasComponent,
    AgregarTareaComponent,
    InicioSeccionComponent,
    TarjetaComponent,
    NotasComponent,
    AlertaComponent,
    PrincipalComponent,
    CalendarioComponent,
    CitasComponent,
    MesesComponent,
    DiasComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
