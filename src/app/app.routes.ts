import { Routes } from '@angular/router';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { UsersComponent } from './auth/usuarios-cadastro/usuario-cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'usuarios', component: UsersComponent },
];
