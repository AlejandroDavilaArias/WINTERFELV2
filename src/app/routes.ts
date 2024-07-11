import { Routes } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { RegistroComponent } from './inicio-seccion/registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NoEncontroComponent } from './no-encontro/no-encontro.component';
import { NotasComponent } from './notas/notas.component';
import { CalendarioComponent } from './principal/calendario/calendario.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      { path: 'principal', component: PrincipalComponent },
      { path: 'notas', component: NotasComponent },
      { path: 'calendario', component: CalendarioComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'registro', component: RegistroComponent },
      { path: '', redirectTo: 'principal', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoEncontroComponent },
];
