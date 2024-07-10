//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { LoginComponent } from './login/login.component';
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
import { NoEncontroComponent } from './no-encontro/no-encontro.component';
import { validaruserGuard } from './guard/validaruser.guard';

const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [validaruserGuard],
  },
  { path: 'notas', component: NotasComponent, canActivate: [validaruserGuard] },
  {
    path: 'calendario',
    component: CalendarioComponent,
    canActivate: [validaruserGuard],
  },
  { path: 'citas', component: CitasComponent, canActivate: [validaruserGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoEncontroComponent },
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
    NoEncontroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
